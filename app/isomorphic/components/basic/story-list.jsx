const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function StoryList(props) {
  return !props.stories ? null :  <div className="story-list">
    {props.stories.map((storyObj) => {
        {/* This `storyObj` object includes `id`, `type` and actual `story` object. We only
        need actual story object.*/}
        return storyObj && <StoryListItem story={storyObj.story} key={storyObj.id} config={props.config}></StoryListItem>
      }
    )}
  </div>
}

function StoryListItem(props) {
  const inlineStyle = {
    borderBottom: 'solid 2px ' + props.story['section-color']
  }
  const author = {
    name: props.story['author-name']
  }
  return (
    !props.story ? null : <Link href={"/" + (props.story['parent-collection'] ? props.story['generated-slug'] : props.story.slug) }>
      {
        props.config && props.config.section &&
        <SectionName inlineStyle={inlineStyle} name={props.story.sections[0]['display-name']}/>
      }
      <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <Author author={author}/>
    </Link>
  )
}

exports.StoryList = StoryList;
exports.StoryListItem = StoryListItem;

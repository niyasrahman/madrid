const React = require("react");

const { Link } = require("@quintype/framework/components/link");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function StoryList(props) {
  return !props.stories ? null :  <div className="story-list">
    {props.stories.map((storyObj, index) => {
        // The `props.story` can be an item from items of a collection or a story itself.
        // assigning it accordinlgy.
        const story = storyObj && storyObj.type === 'story' && storyObj.story ? storyObj.story : storyObj;
        return story && <StoryListItem story={story} key={index} config={props.config}></StoryListItem>
      }
    )}
  </div>
}

function StoryListItem({story, config}) {
  const inlineStyle = {
    borderBottom: 'solid 2px ' + story['section-color']
  }
  const author = {
    name: story['author-name']
  }
  return (
    <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) }>
      {
        config && config.section &&
        <SectionName inlineStyle={inlineStyle} name={story.sections[0]['display-name']}/>
      }
      <h2 className="story-list__heading" dangerouslySetInnerHTML={ {__html: story.headline }} />
      <Author author={author}/>
    </Link>
  )
}

exports.StoryList = StoryList;
exports.StoryListItem = StoryListItem;

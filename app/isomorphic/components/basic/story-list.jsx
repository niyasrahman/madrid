const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");

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
  return (
    !props.story ? null : <Link href={"/" + (props.story.parentCollection ? props.story.generatedSlug : props.story.slug) } className="section-card--2">
      {
        props.config && props.config.section &&
        <div className="section--title--small section--travel story-list__section-name">
          {props.story.sections[0].name}
        </div>
      }
      <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <div className="author--title author--small">
        {props.story['author-name']}
      </div>
    </Link>
  )
}

exports.StoryList = StoryList;

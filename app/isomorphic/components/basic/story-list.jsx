const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");

function StoryList(props) {
  return !props.stories ? null :  <div className="rango__middle no--bg">
    {props.stories.map((story, index) =>
        <StoryListItem story={story} key={index}></StoryListItem>
    )}
  </div>
}

function StoryListItem(props) {
  return (
    !props.story ? null : <Link href={"/" + props.story.slug} className="section-card--2">
      {/* other classes: section--health-fit, section--science...  */}
      <div className="section--title--small section--travel">
        {props.story.sections[0].name}
      </div>
      <h2>{props.story.headline}</h2>
      <div className="author--title author--small">
        {props.story['author-name']}
      </div>
    </Link>
  )
}

exports.StoryList = StoryList;

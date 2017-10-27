const React = require("react");
const TimeAgo = require('react-timeago').default;


function StoryHeaderCard(props) {
  const sectionColor = {
    borderBottomColor: props.story['section-color']
  };
  const liveDisplayStyles = {
    backgroundColor : props.story['section-color']
  }
  return <header className="story-header">
          <a className="story-section" href={"/" + props.story.sections[0]['slug']} style={sectionColor}>
            {props.story.sections[0]['display-name'].length > 0 && props.story.sections[0]['display-name'] }
          </a>
          <div>
            { (props.story['story-template'] === "live-blog") && <span className="live-story" style={liveDisplayStyles}>live</span> }
            <h3 className="story-headline" dangerouslySetInnerHTML={ {__html: props.story.headline }} />
          </div>
          <p className="story-summary">{props.story.subheadline}</p>
          <div className="story-byline">
            { /* <figure className="story-image-author"><img src="" alt={props.story['author-name']} className="story-author-image"/></figure> */}
            <div className="story-byline_author_time">
              <h4 className="story-author">{props.story['author-name']}</h4>
              <TimeAgo date={props.story['first-published-at']}  className="story-published_date"/>
            </div>
          </div>
           {/* <ShareStory /> */}
        </header>
}

exports.StoryHeaderCard = StoryHeaderCard;

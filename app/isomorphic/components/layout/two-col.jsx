const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { StoryCard } = require("../basic/story-card.jsx")
const { MediaObjectsList } = require("../basic/media-object-list.jsx")

function TwoCol(props) {
  const storyCardConfig = {
    subheadline: true,
    image: true
  }
  const sectionColor = {
    borderBottomColor: props.config['collection-color']
  }
  return (
    <div className="two-col component-wrapper">
      <div className="two-col__title">
        <h2 className="section--title--large section--health-fit--large" style={sectionColor}>{props.config['collection-name']}</h2>
      </div>
      <div className="two-col__media-list">
        <MediaObjectsList stories= {props.stories.slice(0,3)} />
      </div>
      <div className="two-col__last">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
    </div>
  )
}


exports.TwoCol = TwoCol;

const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { StoryCard } = require("../basic/story-card.jsx")
const { MediaObject } = require("../basic/media-object.jsx")

function TwoCol(props) {
  const storyCardConfig = {
    subheadline: true,
    image: true
  }
  const sectionColor = {
    borderBottomColor: props.config.collectionColor
  }
  return (
    <div className="two-col">
      <div className="two-col__title">
        <h2 className="section--title--large section--health-fit--large" style={sectionColor}>{props.config.collectionName}</h2>
      </div>
      <div className="two-col__first">
        {props.stories.slice(0,3).map(storyObj =>
          <MediaObject story={storyObj.story} key={storyObj.id}/>
        )}
      </div>
      <div className="two-col__last">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
    </div>
  )
}


exports.TwoCol = TwoCol;

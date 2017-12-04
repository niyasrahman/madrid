const React = require("react");

const { StoryCard } = require("../basic/story-card.js")
const { MediaObjectsList } = require("../basic/media-object-list.js")
const { SectionName } = require("../basic/section-name.js");

function TwoCol(props) {
  const storyCardConfig = {
    subheadline: true,
    image: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="two-col component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
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

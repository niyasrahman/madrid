const React = require("react");

const { StoryCard } = require("../basic/story-card.js")
const { MediaObjectsList } = require("../basic/media-object-list.js")
const { SectionName } = require("../basic/section-name.js");

function CardGroup(props) {
  const majorStoryCardConfig = {
    subheadline: false,
    image: true,
    transparent: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="card-group">
      <div className="component-wrapper">
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
        <div className="col-8">
          <StoryCard story={props.stories[0]} config={majorStoryCardConfig}/>
        </div>
        <div className="col-4">
          <StoryCard story={props.stories[1]}/>
          <StoryCard story={props.stories[2]}/>
          <StoryCard story={props.stories[3]}/>
        </div>
      </div>
    </div>
  )
}


exports.CardGroup = CardGroup;

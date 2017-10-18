const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { MediaObjectsList } = require("../basic/media-object-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

function CardGroup(props) {
  const storyCardConfig = {
    subheadline: false,
    image: true,
    transparent: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="component-wrapper">
      <div className="col-8">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
    </div>
  )
}


exports.CardGroup = CardGroup;

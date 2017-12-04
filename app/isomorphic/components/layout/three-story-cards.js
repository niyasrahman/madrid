const React = require("react");

const { StoryCard } = require("../basic/story-card.js")
const { StoryList } = require("../basic/story-list.js")
const { SectionName } = require("../basic/section-name.js");

function ThreeStoryCards(props) {
  const majorStoryCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  }
  return (
    <div className="three-story-cards component-wrapper">
      <div className="col-4">
        <StoryCard story={props.stories[0]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[1]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[2]} config={majorStoryCardConfig}/>
      </div>
    </div>
  )
}

module.exports.ThreeStoryCards = ThreeStoryCards;

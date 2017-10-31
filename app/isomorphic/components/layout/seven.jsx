const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

function Seven(props) {
  const majorStoryCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  }
  return (
    <div className="onestorycard-sixstorylist component-wrapper">
      <div className="col-4">
        <StoryCard story={props.stories[0]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[1]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[2]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[3]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[4]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[5]} config={majorStoryCardConfig}/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[6]} config={majorStoryCardConfig}/>
      </div>

    </div>
  )
}

exports.Seven = Seven;

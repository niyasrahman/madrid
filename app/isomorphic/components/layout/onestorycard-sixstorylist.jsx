const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

function OneStoryCardSixStoryList(props) {
  const majorStoryCardWithSubheadlineConfig = {
    image: true,
    subheadline: true,
    imageAspectRatio: [2,3]
  }
  const majorStoryCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  }
  const config = {
    section: true,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="onestorycard-sixstorylist component-wrapper">
      <div className="col-4">
        <StoryCard story={props.stories[0]} config={majorStoryCardWithSubheadlineConfig}/>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[1], props.stories[2], props.stories[3]]}>
        </StoryList>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[4], props.stories[5], props.stories[6]]}>
        </StoryList>
      </div>
    </div>
  )
}

exports.OneStoryCardSixStoryList = OneStoryCardSixStoryList;

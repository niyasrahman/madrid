import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";

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

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="onestorycard-sixstorylist component-wrapper">
      <div className="col-4">
        <StoryCard story={props.stories[0]} config={majorStoryCardWithSubheadlineConfig}/>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[1], props.stories[2], props.stories[3],props.stories[4], props.stories[5]]}>
        </StoryList>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[6], props.stories[7], props.stories[8], props.stories[9], props.stories[10]]}>
        </StoryList>
      </div>
    </div>
  )
}

export { OneStoryCardSixStoryList };

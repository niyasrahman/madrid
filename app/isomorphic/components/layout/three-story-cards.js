import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";

export function ThreeStoryCards(props) {
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

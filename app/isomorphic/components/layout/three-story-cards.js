import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";

export function ThreeStoryCards(props) {
  const majorStoryCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  }

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="three-col__items component-wrapper">
      <div className="three-col__item">
        <StoryCard story={props.stories[0]} config={majorStoryCardConfig}/>
      </div>
      <div className="three-col__item">
        <StoryCard story={props.stories[1]} config={majorStoryCardConfig}/>
      </div>
      <div className="three-col__item">
        <StoryCard story={props.stories[2]} config={majorStoryCardConfig}/>
      </div>
    </div>
  )
}

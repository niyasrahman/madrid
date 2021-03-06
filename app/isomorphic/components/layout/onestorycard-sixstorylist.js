import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";
import { DfpAd } from "../dfp-ads"

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
      <StoryCard story={props.stories[0]} config={majorStoryCardWithSubheadlineConfig}/>
      <StoryList
        stories={[props.stories[1], props.stories[2], props.stories[3]]}>
      </StoryList>
      <StoryList
        stories={[props.stories[4], props.stories[5], props.stories[6]]}>
      </StoryList>
      <div className="app-ad app-ad--horizontal app-ad--grid-horizontal">
        <DfpAd adtype="Horizontal-Ad" layoutName="OneStoryCardSixStoryList" collectionSlug={props.config['collection-slug']}/>
      </div>
    </div>
  )
}

export { OneStoryCardSixStoryList };

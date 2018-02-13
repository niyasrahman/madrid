import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { DfpAd } from "../dfp-ads";

function TwoColOneAd(props) {
  const storyCardConfig = {
    section: true,
    subheadline: true,
    image: true
  }
  const storyListConfig = {
    section: true
  }

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="two-col-one-ad component-wrapper">
      <div className="col-4">
        <StoryCard
          story={props.stories[0]}
          config={storyCardConfig}>
        </StoryCard>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[1], props.stories[2], props.stories[3]]}
          config={storyListConfig}>
        </StoryList>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[4]]}
          config={storyListConfig}>
        </StoryList>
        <div className="app-ad app-ad--mrec">
          <DfpAd adtype="Mrec" layoutName="TwoColOneAd" collectionSlug={props.config['collection-slug']}/>
        </div>
      </div>
    </div>
  )

}

export { TwoColOneAd };

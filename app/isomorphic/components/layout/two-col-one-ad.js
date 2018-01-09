import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { NewsletterSub } from "../basic/newsletter-sub.js"

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
        <NewsletterSub></NewsletterSub>
      </div>
    </div>
  )

}

export { TwoColOneAd };

import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";
import { DfpAd } from "../dfp-ads"

function ThreeCol(props) {
  const secondColFirstCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  };
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="three-col component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']} />
      <div className="three-col__items">
        <div className="three-col__item full-image">
          <StoryCard story={props.stories[0]} type="imageBackground" config={secondColFirstCardConfig}/>
        </div>
        <div className="three-col__item two-stories">
          <StoryCard story={props.stories[1]} config={secondColFirstCardConfig}/>
          <StoryCard story={props.stories[2]}/>
        </div>
        <div className="three-col__item">
          <StoryList
            stories={[props.stories[3], props.stories[4], props.stories[5], props.stories[6],props.stories[7]]}>
          </StoryList>
        </div>
      </div>
      <div className="app-ad app-ad--horizontal">
        <DfpAd adtype="Horizontal-Ad" layoutName="ThreeCol" collectionSlug={props.config['collection-slug']}/>
      </div>
    </div>
  )

}

export { ThreeCol };

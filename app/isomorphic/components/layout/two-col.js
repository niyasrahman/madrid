import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { MediaObjectsList } from "../basic/media-object-list.js"
import { SectionName } from "../basic/section-name.js";
import { DfpAd } from "../dfp-ads"

function TwoCol(props) {
  const storyCardConfig = {
    subheadline: true,
    image: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="two-col component-wrapper">
      <SectionName hideLink={true} inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
      <div className="two-col__items">
        <div className="two-col__item">
          <MediaObjectsList stories= {props.stories.slice(0,3)} sectionColor={props.config['collection-color']} />
        </div>
        <div className="two-col__item full-card">
          <StoryCard story={props.stories[3]} config={storyCardConfig}/>
        </div>
      </div>
      
      <div className="app-ad app-ad--horizontal">
        <DfpAd adtype="Horizontal-Ad" layoutName="TwoCol" collectionSlug={props.config['collection-slug']}/>
      </div>
    </div>
  )
}


export { TwoCol };

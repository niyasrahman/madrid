import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { MediaObjectsList } from "../basic/media-object-list.js"
import { SectionName } from "../basic/section-name.js";

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
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
      <div className="two-col__media-list">
        <MediaObjectsList stories= {props.stories.slice(0,3)} />
      </div>
      <div className="two-col__last">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
    </div>
  )
}


export { TwoCol };

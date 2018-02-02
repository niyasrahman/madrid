import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { MediaObjectsList } from "../basic/media-object-list.js"
import { SectionName } from "../basic/section-name.js";

function CardGroup(props) {
  const majorStoryCardConfig = {
    subheadline: false,
    image: true,
    transparent: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="card-group">
      <div className="component-wrapper">
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
        <div className="col-8">
          <StoryCard story={props.stories[0]} config={majorStoryCardConfig}/>
        </div>
        <div className="col-4">
          <StoryCard story={props.stories[1]}/>
          <StoryCard story={props.stories[2]}/>
          <StoryCard story={props.stories[3]}/>
        </div>
      </div>
    </div>
  )
}


export { CardGroup };

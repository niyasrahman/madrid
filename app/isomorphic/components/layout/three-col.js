import React from "react";

import { StoryCard } from "../basic/story-card.js"
import { StoryList } from "../basic/story-list.js"
import { SectionName } from "../basic/section-name.js";

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
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
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
            stories={[props.stories[1], props.stories[2], props.stories[3], props.stories[4]]}>
          </StoryList>
        </div>
      </div>
    </div>
  )

}

export { ThreeCol };

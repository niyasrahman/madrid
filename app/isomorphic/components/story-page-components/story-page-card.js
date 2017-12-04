import React from "react";
import { SummaryElement} from "../basic/summary-element.js";
import { BlockquoteElement} from "../basic/blockquote-element.js";
import { StoryElement } from "@quintype/components";

const StoryPageCard = props => {
  return <div>
    {props.card['story-elements'].map((element, index) => {
      switch (element.subtype) {
        case 'summary':
          return <div key={index}>
            <SummaryElement element={element} key={index} story={props.story}></SummaryElement>
          </div>
          break;
        case 'blockquote':
          return <div key={index}>
            <BlockquoteElement element={element} key={index} story={props.story}></BlockquoteElement>
          </div>
          break;
        default:
          return <StoryElement element={element} key={index} story={props.story}></StoryElement>
      }
    })}
  </div>
}

export { StoryPageCard };

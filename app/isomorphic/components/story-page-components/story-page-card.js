import React from "react";
import { SummaryElement} from "../basic/summary-element.js";
import { BlockquoteElement} from "../basic/blockquote-element.js";
import { ImageGalleryElement } from "../basic/imagegallery-element";
import { ImageSlideshowElement } from "../basic/image-slideshow-element";
import { StoryElement } from "@quintype/components";

const StoryPageCard = props => {
  return <div>
    {props.card['story-elements'].map((element, index) => {
      switch (element.subtype) {
        case 'summary':
          return <div key={index}>
            <SummaryElement element={element} key={element.id} story={props.story}></SummaryElement>
          </div>
          break;
        case 'blockquote':
          return <div key={index}>
            <BlockquoteElement element={element} key={element.id} story={props.story}></BlockquoteElement>
          </div>
          break;
        case 'image-gallery':
          return <div key={index}>
          {element.metadata.type === "gallery" ?
            <ImageGalleryElement element={element} key={element.id} story={props.story} />
            :
            <ImageSlideshowElement element={element} key={element.id} story={props.story} />}
            </div>
        break;
        default:
          return <StoryElement element={element} key={element.id} story={props.story}></StoryElement>
      }
    })}
  </div>
}

export { StoryPageCard };

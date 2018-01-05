import React from "react";
import canUseDom from "../../../utils/can-use-dom";

import { Carousel } from '../basic/carousel.js'

function FullscreenCarousel(props) {
  const numberofStories = canUseDom ? 6 : 1;

  return <Carousel stories={props.stories} limit={numberofStories} />;
}

export { FullscreenCarousel };

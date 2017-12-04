import React from "react";

import { Carousel } from '../basic/carousel.js'

function FullscreenCarousel(props) {
  return <Carousel stories={props.stories} limit={6} />;
}

export { FullscreenCarousel };

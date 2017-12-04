const React = require("react");

const { Carousel } = require('../basic/carousel.js')

function FullscreenCarousel(props) {
  return <Carousel stories={props.stories} limit={6} />;
}

exports.FullscreenCarousel = FullscreenCarousel;

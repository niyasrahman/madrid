const React = require("react");

const { MediaCarousel } = require('../basic/media-carousel.jsx')

function FullscreenMediaCarousel(props) {
  return <MediaCarousel stories={props.stories} limit={6} />;
}

exports.FullscreenMediaCarousel = FullscreenMediaCarousel;

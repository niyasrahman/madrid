const React = require("react");

const { MediaCarousel } = require('../basic/media-carousel.jsx')

function FullscreenMediaCarousel(props) {
  return (
    <MediaCarousel stories={[props.stories[1].story, props.stories[2].story, props.stories[3].story]} />
  )

}

exports.FullscreenMediaCarousel = FullscreenMediaCarousel;

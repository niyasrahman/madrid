const React = require("react");

const { SimpleSlider } = require('../basic/simple-slider.js')

function FullscreenSimpleSlider(props) {
  return <SimpleSlider stories={props.stories} />;
}

exports.FullscreenSimpleSlider = FullscreenSimpleSlider;

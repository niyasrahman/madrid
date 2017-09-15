const React = require("react");

const { LinearGallerySlider } = require('../basic/linear-gallery-slider.jsx')

function FullscreenLinearGallerySlider(props) {
  return <LinearGallerySlider stories={props.stories} collectionName={props.collectionName}/>
}

exports.FullscreenLinearGallerySlider = FullscreenLinearGallerySlider;

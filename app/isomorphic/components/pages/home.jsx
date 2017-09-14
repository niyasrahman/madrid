const React = require("react");

const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");
const { FullscreenMediaCarousel } = require("../layout/fullscreen-media-carousel.jsx");
const { FullscreenSimpleSlider } = require("../layout/fullscreen-simple-slider.jsx");


const templates = {
  'featured-stories': FullscreenMediaCarousel,
  'main-stories': TwoColOneAd,
  'must-read': FullscreenSimpleSlider
}

function getTemplate(designTemplate){
  return templates[designTemplate] ? templates[designTemplate] : TwoColOneAd;
}


class HomePage extends React.Component {

  render() {
    return <div>
      {this.props.data.homeCollections.map((collection, index) => {
        if (collection) {
            return React.createElement(getTemplate(collection.slug), {stories: collection.items, key: index})
        }
      })}
    </div>;
  }
}

exports.HomePage = HomePage;

const React = require("react");

const { TwoColOneAd } = require("../layout/two-col-one-ad.js");
const { FullscreenCarousel } = require("../layout/fullscreen-carousel.js");
const { FullscreenSimpleSlider } = require("../layout/fullscreen-simple-slider.js");
const { FullscreenLinearGallerySlider } = require("../layout/fullscreen-linear-gallery-slider.js");
const { ThreeCol } = require("../layout/three-col.js");
const { TwoCol } = require("../layout/two-col.js");
const { LShapeOneWidget } = require("../layout/l-shape-one-widget.js");
const { FullscreenMediaList } = require("../layout/fullscreen-media-list.js");
const { Footer } = require('../layout/footer.js');

class HomePage extends React.Component {

  render() {
    const templates = {
      'featured-stories': FullscreenCarousel,
      'main-stories': TwoColOneAd,
      'must-read': FullscreenSimpleSlider,
      'politics': ThreeCol,
      'film': FullscreenLinearGallerySlider,
      'other': TwoCol,
      'lifestyle': LShapeOneWidget,
      'recent-stories': FullscreenMediaList
    }

    function getTemplate(designTemplate){
      return templates[designTemplate] ? templates[designTemplate] : ThreeCol;
    }

    return <div className="home-page">
      {this.props.data.homeCollections.map((collection, index) => {
        if (collection) {
          const config = {
            'collection-name': collection.name,
            'collection-slug': collection.slug,
            'collection-color': collection.color
          }
          return React.createElement(
            getTemplate(collection.slug),
            {stories: collection.items, key: collection.id, config: config}
          );
        }
      })}
    </div>;
  }
}

exports.HomePage = HomePage;

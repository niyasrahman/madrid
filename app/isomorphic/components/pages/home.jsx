const React = require("react");

const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");
const { FullscreenCarousel } = require("../layout/fullscreen-carousel.jsx");
const { FullscreenSimpleSlider } = require("../layout/fullscreen-simple-slider.jsx");
const { FullscreenLinearGallerySlider } = require("../layout/fullscreen-linear-gallery-slider.jsx");
const { ThreeCol } = require("../layout/three-col.jsx");
const { TwoCol } = require("../layout/two-col.jsx");
const { LShapeOneWidget } = require("../layout/l-shape-one-widget.jsx");
const { FullscreenMediaList } = require("../layout/fullscreen-media-list.jsx");
const { Footer } = require('../layout/footer.jsx');

class HomePage extends React.Component {

  render() {
    // TODO: Get these staticLinks and navbarConfig from a common config file
    const staticLinks = [
      {
        content: 'About us',
        url: '/about'
      },
      {
        content: 'Privacy Policy',
        url: '/privacy'
      },
      {
        content: 'Terms & Conditions',
        url: '/terms'
      }
    ]

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

    return <div>
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
      <Footer links={staticLinks}/>
    </div>;
  }
}

exports.HomePage = HomePage;

const React = require("react");

const { NavigationComponent } = require("../navigation-component.jsx");
const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");
const { FullscreenMediaCarousel } = require("../layout/fullscreen-media-carousel.jsx");
const { FullscreenSimpleSlider } = require("../layout/fullscreen-simple-slider.jsx");
const { FullscreenLinearGallerySlider } = require("../layout/fullscreen-linear-gallery-slider.jsx");
const { ThreeCol } = require("../layout/three-col.jsx");
const { TwoCol } = require("../layout/two-col.jsx");
const { LShapeOneWidget } = require("../layout/l-shape-one-widget.jsx");
const { FullscreenMediaList } = require("../layout/fullscreen-media-list.jsx");
const { Footer } = require('../layout/footer.jsx')

class HomePage extends React.Component {

  render() {
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

    const navbarConfig = {
      title: 'Madrid',
      menu: this.props.data.navigationMenu,
      links: staticLinks
    };

    const templates = {
      'featured-stories': FullscreenMediaCarousel,
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
      <NavigationComponent {...navbarConfig}/>
      {this.props.data.homeCollections.map((collection, index) => {
        if (collection) {
          const config = {
            collectionName: collection.name,
            collectionSlug: collection.slug
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

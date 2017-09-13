const React = require("react");

const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");
const { FullscreenMediaCarousel } = require("../layout/fullscreen-media-carousel.jsx");
const { FullscreenSimpleSlider } = require("../layout/fullscreen-simple-slider.jsx");


const templates = {
  'wh-block-featured': TwoColOneAd
}

function getTemplate(designTemplate){
  return templates[designTemplate];
}


class HomePage extends React.Component {

  render() {
    return <div>
      <FullscreenMediaCarousel stories={this.props.data.homeCollections[0].items}/>
      <TwoColOneAd stories={this.props.data.homeCollections[1].items}/>
      <FullscreenSimpleSlider stories={this.props.data.homeCollections[2].items}/>
      {this.props.data.homeCollections.map((collection) =>
        <TwoColOneAd stories={collection.items} key={collection.id}/>
      )}
    </div>;
  }
}

exports.HomePage = HomePage;

const React = require("react");

const { OneMainCardSlider } = require("../layout/one-main-card-slider.js");
const { FullscreenMediaList } = require("../layout/fullscreen-media-list.js");
const { ThreeStoryCards } = require("../layout/three-story-cards.js");
const { OneStoryCardSixStoryList } = require("../layout/onestorycard-sixstorylist.js");
const { CardGroup } = require("../layout/card-group.js");

class SectionPage extends React.Component {
  render() {
    const config = {
      'collection-name': this.props.data.collection.name,
      'collection-slug': this.props.data.collection.slug,
      'collection-color': this.props.data.collection.color
    }
    return <div>
      <CardGroup stories={this.props.data.collection.items.slice(0,4)} config= {config}/>
      <OneMainCardSlider stories={this.props.data.collection.items.slice(0,20)} config= {config}/>
      <ThreeStoryCards stories={this.props.data.collection.items.slice(0,3)} config= {config}/>
      <OneStoryCardSixStoryList stories={this.props.data.collection.items.slice(0,7)} config= {config}/>
      <FullscreenMediaList adsSlot = {true} HideSectionName = {true} stories={this.props.data.collection.items.slice(4)} config= {config}/>
    </div>;
  }
}

exports.SectionPage = SectionPage;

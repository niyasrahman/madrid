import React from "react";

import { OneMainCardSlider } from "../layout/one-main-card-slider.js";
import { FullscreenMediaList } from "../layout/fullscreen-media-list.js";
import { ThreeStoryCards } from "../layout/three-story-cards.js";
import { OneStoryCardSixStoryList } from "../layout/onestorycard-sixstorylist.js";
import { CardGroup } from "../layout/card-group.js";

class SectionPage extends React.Component {
  render() {
    const config = {
      'collection-name': this.props.data.collection.name,
      'collection-slug': this.props.data.collection.slug,
      'collection-color': this.props.data.collection.color
    }
    const stories = this.props.data.collection.items;
    return <div>
      <CardGroup stories={stories.slice(0,4)} config= {config}/>
      <OneMainCardSlider stories={stories.slice(4,11)} config= {config}/>
      <ThreeStoryCards stories={stories.slice(11,14)} config= {config}/>
      <OneStoryCardSixStoryList stories={stories.slice(14,21)} config= {config}/>
      <FullscreenMediaList adsSlot={true}
        hideSectionName={true}
        stories={stories.slice(21)}
        config= {config}
        hideLoadmore= {true} />
    </div>;
  }
}

export { SectionPage };

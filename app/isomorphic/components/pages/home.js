import React from "react";

import { TwoColOneAd } from "../layout/two-col-one-ad.js";
import { FullscreenCarousel } from "../layout/fullscreen-carousel.js";
import { FullscreenSimpleSlider } from "../layout/fullscreen-simple-slider.js";
import { FullscreenLinearGallerySlider } from "../layout/fullscreen-linear-gallery-slider.js";
import { ThreeCol } from "../layout/three-col.js";
import { TwoCol } from "../layout/two-col.js";
import { LShapeOneWidget } from "../layout/l-shape-one-widget.js";
import { FullscreenMediaList } from "../layout/fullscreen-media-list.js";
import _ from 'lodash';

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
            'collection-color': collection.color,
            'collection-section': _.get(collection,['metadata', 'section'], [])
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

export { HomePage };

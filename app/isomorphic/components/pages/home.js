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
      'FullscreenCarousel': FullscreenCarousel,
      'TwoColOneAd': TwoColOneAd,
      'FullscreenSimpleSlider': FullscreenSimpleSlider,
      'ThreeCol': ThreeCol,
      'FullscreenLinearGallerySlider': FullscreenLinearGallerySlider,
      'TwoCol': TwoCol,
      'LShapeOneWidget': LShapeOneWidget,
      'FullscreenMediaList': FullscreenMediaList
    };

    function getTemplate(designTemplate){
      return templates[designTemplate] ? templates[designTemplate] : ThreeCol;
    }

    return <div className="home-page">
      {this.props.data.orderedCollectionBulk.map((collection, index) => {
        if (collection) {
          const config = {
            'collection-name': collection.name,
            'collection-slug': collection['slug-with-parent'] ? collection['slug-with-parent'] : collection.slug,
            'collection-color': collection.color,
            'collection-section': _.get(collection,['metadata', 'section'], [])
          }
          const componentProps = {stories: collection.items, key: collection.id, config: config}
          if(collection['associated-metadata']['layout'] === 'FullscreenMediaList') {
            componentProps.adSlot= true
          }
          return React.createElement(
            getTemplate(collection['associated-metadata']['layout']),
            componentProps
          );
        }
      })}
    </div>;
  }
}

export { HomePage };

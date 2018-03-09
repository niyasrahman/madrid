import React from "react";

import { ThreeColMain } from "../layout/three-col-main.js";
import { FourCol } from "../layout/four-col-story.js";
import { TwoColOneVerticalAd } from "../layout/two-col-one-vertical-ad.js";
import { ThreeColMovie } from "../layout/three-col-movie.js";
import { TwoColDarkBackgroundCard } from "../layout/two-col-dark-background-card.js";
import { ThreeColWithBanner } from "../layout/three-col-with-banner.js";
import _ from 'lodash';

class HomePage extends React.Component {

  render() {
    const templates = {
      'ThreeColMain': ThreeColMain,
      'FourCol' : FourCol,
      'TwoColOneVerticalAd' : TwoColOneVerticalAd,
      'TwoColDarkBackgroundCard' : TwoColDarkBackgroundCard,
      'ThreeColMovie': ThreeColMovie,
      'ThreeColWithBanner': ThreeColWithBanner,

    };

    function getTemplate(designTemplate){
      return templates[designTemplate] ? templates[designTemplate] : ThreeColMovie;
    }

    return <div className="home-page">
      { /* Don't want to show it user but need it for SEO reasons🙄 */ }
      <h1 style={{display: 'none'}}>{_.get(this.props.config, ['publisher-settings', 'title'], this.props['publisher-name'])}</h1>
      {this.props.data.orderedCollectionBulk.map((collection, index) => {
        if (collection) {
          const config = {
            'collection-name': collection.name,
            'collection-slug': collection['section-page-slug'] || "#",
            'collection-color': collection.color,
            'collection-section': collection.section
          }
          const componentProps = {
            stories: collection.items,
            heading: collection.name,
            key: collection.id,
            config: config
          }
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

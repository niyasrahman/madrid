import React from "react";
import Slider from "react-slick";
import classNames from 'classnames';

import { Link, ResponsiveImage } from "@quintype/components";

import { DfpAd } from "../dfp-ads"
import { ImageFallback } from "../basic/image-fallback.js";

function OneMainCardSlider(props) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      arrows: true,
      centerMode: true,
      centerPadding: '270px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    };

  return !props.stories.length ? null : <div className="one-main-card-slider component-wrapper-fluid">
      <div className="component-wrapper">
      <Slider {...settings} className="one-main-card-slider__slides">
        {props.stories.map((item) =>
          <div key={item.id} className="one-main-card-slider__slider-content">
            <SliderItem item={item} />
          </div>
        )}
      </Slider>
      </div>
      <div className="app-ad app-ad--horizontal">
        <DfpAd adtype="Horizontal-Ad" layoutName="OneMainCardSlider" collectionSlug={props.config['collection-slug']}/>
      </div>
    </div>
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item.type === 'story' && props.item.story ? props.item.story : props.item;
  return (
    <Link className={classNames('overlay-story-card', {'overlay-story-card--video': story['story-template'] === 'video'})} href={"/" + story.slug }>
    { story["hero-image-s3-key"] ?
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[57,32]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure> :
      <ImageFallback/> }
      <p className="overlay-story-card__heading" dangerouslySetInnerHTML={ {__html: story.headline }} />
    </Link>
  )
}

export { OneMainCardSlider };

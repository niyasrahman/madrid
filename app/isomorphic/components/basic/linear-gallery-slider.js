import React from "react";
import Slider from "react-slick";
import { Link, ResponsiveImage } from "@quintype/components";
import canUseDom from "../../../utils/can-use-dom";
import { SectionName } from "./section-name.js";


function LinearGallerySlider(props) {
  const settings = {
    centerMode: true,
    centerPadding: '130px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  };
  const inlineStyle = {
    borderBottom: 'solid 4px #fff',
    color: '#fff',
    marginBottom: '0'
  }
  if(!props.stories) {
    return null
  }

  return (
    <div className="linear-gallery-slider component-wrapper-fluid">
      <div className="linear-gallery-slider__heading">
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
      </div>
      {canUseDom &&
      <Slider {...settings} className="linear-gallery-slider__slides">
        {props.stories.map((item) =>
          <div key={item.id} className="linear-gallery-slider__slider-content">
            <SliderItem item={item} />
          </div>
        )}
      </Slider> }
    </div>
  )
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item.type === 'story' && props.item.story ? props.item.story : props.item;
  return (
    <Link href={"/" + story.slug }>
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[4,3]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <p className="linear-gallery-slider__item-title" dangerouslySetInnerHTML={ {__html: story.headline }} />
    </Link>
  )
}

export { LinearGallerySlider };

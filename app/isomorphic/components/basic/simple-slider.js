import React from "react";
import Slider from "react-slick";

import { Link, ResponsiveImage } from "@quintype/components";


function SimpleSlider(props) {
  const settings = {
      dots: false,
      infinite: props.stories.length > 1,
      speed: 600,
      arrows: true,
      slidesToShow: 1
    };
  return !props.stories ? null : <div className="simple-slider component-wrapper-fluid">
      <Slider {...settings}>
        {props.stories.map((item) =>
          <div key={item.id}>
            <SliderItem item={item} />
          </div>
        )}
      </Slider>
    </div>
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item && props.item.type === 'story' && props.item.story ? props.item.story : props.item;

  return (
    <div className="simple-slider__item">
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[9,3]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <div className="simple-slider__content">
        <p className="simple-slider__section-name">Must Reads</p>
        <h2 className="simple-slider__story-heading">{story.headline}</h2>
        <Link href={"/" + story.slug } className="simple-slider__link" >
          read story
        </Link>
      </div>
    </div>
  )
}

export { SimpleSlider };

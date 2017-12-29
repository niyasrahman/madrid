import React from "react";
import { ResponsiveImage } from "@quintype/components";
import _ from "lodash";
import Slider from "react-slick";

const ImageSlideshowElement = (props) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: true,
    slidesToShow: 1
  };

  const images = _.map(props.element['story-elements'], image => (
    <div className="story-element-image-slideshow__slide" key={image.id}>
      <figure key={image.id} className="story-element-image-slideshow__image-container">
        <ResponsiveImage slug={image["image-s3-key"]}
                        metadata={image["metadata"]}
                        aspect-ratio={[16,9]}
                        defaultWidth= {480}
                        widths={[250,480,640]}
                        imgParams={{auto: ['format','compress']}}
                        className='story-element-image-slideshow__image'
                        alt={image.title}
                        />
      </figure>
      <p className="story-element-image-slideshow__caption">{image.title}</p>
    </div>));

    return (
      <div className="story-element-image-slideshow">
        <Slider {...sliderSettings}>
          {images}
        </Slider>
      </div>
    )
  }

export { ImageSlideshowElement };

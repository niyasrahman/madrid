import React from "react";
import { ResponsiveImage } from "@quintype/components";
import _ from "lodash";

const ImageGalleryElement = (props) => {
    const images = _.map(props.element['story-elements'], image => (
      <figure key={image.id} className="story-element-image-gallery__image-container">
        <ResponsiveImage slug={image["image-s3-key"]}
                        metadata={image["metadata"]}
                        aspect-ratio={[1,1]}
                        defaultWidth= {480}
                        widths={[250,480,640]}
                        imgParams={{auto: ['format','compress']}}
                        className='story-element-image-gallery__image'
                        alt={image.title} />
      </figure>));

    return (
      <div className="story-element-image-gallery">
        {images}
      </div>
    )
  }

export { ImageGalleryElement };

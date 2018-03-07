import React from "react";
import get from 'lodash/get';
import { Link, ResponsiveImage } from "@quintype/components";

function MediaOneCard(props){
  
  const story = get(props.story, ['story']) ? get(props.story, ['story']) : props.story;
  const showStoryImage = props.showImage && get(story, ['hero-image-s3-key']);
  const sectionStoryName = props.showSectionName && get(story, ['sections', 0, 'name']) ? get(story, ['sections', 0, 'name']) : null;

  return(
         <Link href={`/${story.slug}`} className='media-one-card'>
         <div className='media-one-card__item'>
          <div className='content-wrapper'>
           {sectionStoryName && <h5 className='section-name'>{sectionStoryName}</h5>}
             <div className='card-content-wrapper'>
                <figure className='image-wrapper'>
                    { showStoryImage && <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 50%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>}
                 </figure>                  
                   <h3 className='card-heading'>{story.headline}</h3>
                </div>
            </div>
          </div>
          </Link>

    
    );
}

export { MediaOneCard };
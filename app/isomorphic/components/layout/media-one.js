import React from "react";

import { StoryList } from "../basic/story-list.js"
import { Link, ResponsiveImage } from "@quintype/components";

function MediaOneCard(props){
  const sectionName = props.showSectionName ? props.story.story.sections[0].name : false;
  const showImage = props.showImage ? props.story.story["hero-image-metadata"] : false;
  return(
         <div className='media-one-card'>
         <div className='media-one-card__item'>
          <div className='content-wrapper'>
           {sectionName && <h5 className='section-name'>{props.story.story.sections[0].name}</h5>}
             <div className='card-content-wrapper'>
                <figure className='image-wrapper'>
                    { showImage && <ResponsiveImage slug={props.story.story["hero-image-s3-key"]} metadata={props.story.story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>}
                 </figure>                  
                   <h3 className='card-heading'>{props.story.story.headline}</h3>
                </div>
            </div>
          </div>
          </div>

    
    );
}

export { MediaOneCard };
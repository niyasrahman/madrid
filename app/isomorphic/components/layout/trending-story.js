import React from "react";
import get from 'lodash/get';
import { StoryCard } from "../basic/story-card.js"
import { Link, ResponsiveImage } from "@quintype/components";

function TrendStoryCard(props){
  const story = get(props.shreya, ['story']) ? get(props.shreya, ['story']) : props.shreya;


  return(
    <Link href={`/${story.slug}`} >
          <div className='media-one-card__item'> 
                       <div className='card-content-wrapper'>
                    <figure className='image-wrapper'>
                    <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 50%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>
                 </figure>
                  <h3 className='card-heading'>{story.headline}</h3>
              </div>
            </div>
            </Link>
              
  );
}

export { TrendStoryCard };
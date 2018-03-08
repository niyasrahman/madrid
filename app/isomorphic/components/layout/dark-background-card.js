import React from "react";

import { StoryList } from "../basic/story-list.js"
import { Link, ResponsiveImage } from "@quintype/components";
import get from 'lodash/get';


function DarkBackgroundCard(props){

  const story = get(props.story, ['story']) ? get(props.story, ['story']) : props.story;
  const wrapperCSSClass  = props.isHorizontal ? 'dark-background-card is-horizontal' : 'dark-background-card';

    return(

         <div className={wrapperCSSClass}>
                <figure className='image-wrapper'>
                    <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 50%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>
                 </figure>                  
                   <h3 className='card-heading'>{story.headline}</h3>
          </div>
);
}
export { DarkBackgroundCard };
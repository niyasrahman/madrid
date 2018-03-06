import React from "react";

import { StoryList } from "../basic/story-list.js"
import { Link, ResponsiveImage } from "@quintype/components";
import get from "lodash/get";

function RedHeaderVerticalCard(props){
  const SectionName = get(props.story.story, ['sections', 0]) ? props.story.story.sections[0].name : null;
  const AuthorName = get(props.story.story,['authors',0]) ? props.story.story.authors[0].name : null;


  return(
        <div className='story-card-main'>
          <div className='content-wrapper'>
           <h5 className='section-name'>{props.story.story.sections[0].name}</h5>
             <div className='card-content-wrapper'>
              <figure className='image-wrapper'>
                <ResponsiveImage slug={props.story.story["hero-image-s3-key"]} metadata={props.story.story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>
             </figure>
                 <h3 className='card-heading'>{props.story.story.headline}</h3>
                 <h3 className='card-author-name'>{props.story.story.authors[0].name}</h3>
                               
            </div>
          </div>
          </div>

    
    );
}

export { RedHeaderVerticalCard };
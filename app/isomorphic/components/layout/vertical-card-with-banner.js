import React from "react";
import lodash from 'lodash/get';
import { StoryList } from "../basic/story-list.js"
import { Link, ResponsiveImage } from "@quintype/components";
import get from "lodash/get";

function VerticalCardWithBanner(props){
  const SectionName = get(story, ['sections', 0]) ? story.sections[0].name : null;
  const AuthorName = get(story,['authors',0]) ? story.authors[0].name : null;
  const story = get(props.story, ['story']) ? get(props.story, ['story']) : props.story;
  const sectionStoryName = get(story, ['sections', 0, 'name']) ? get(story, ['sections', 0, 'name']) : null
  const storyAuthorName = get(story, ['authors', 0, 'name']) ? get(story, ['authors', 0, 'name']) : null

  return(
        <Link href={`/${story.slug}`} className='story-card-main'>
          <div className='content-wrapper'>
           <h5 className='section-name'>{sectionStoryName}</h5>
             <div className='card-content-wrapper'>
              <figure className='image-wrapper'>
                <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={props.story.story["hero-image-metadata"]}
                     aspectRatio={props.aspectRatio ? props.aspectRatio : [4,3]}
                     defaultWidth={480}
                     widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 50%"
                     imgParams={{auto:['format', 'compress'], fit:'max'}}/>
             </figure>
                 <h3 className='card-heading'>{story.headline}</h3>
                 <h3 className='card-author-name'>{storyAuthorName}</h3>
                               
            </div>
          </div>
          </Link>

    
    );
}

export { VerticalCardWithBanner };
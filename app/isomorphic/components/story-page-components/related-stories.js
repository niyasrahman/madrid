import _ from "lodash";
import React from "react";
import { ResponsiveImage } from "@quintype/components";

function RelatedStoryCard(props){
  const classname = props.showImage ? 'story-title story-title-bold' : 'story-title';
  // The `props.story` can be an item from items of a collection or a story itself.
  // assigning it accordinlgy.
  const story = props.story && props.story.story ? props.story.story : props.story;
  return !story ? null : <div className="related_stories-story-card">
    <a href={"/" + story.slug} >
      {
        props.showImage && <figure className="story-card-image">
          <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress'], fit:'max'}}/>
        </figure>
      }
        <h2 dangerouslySetInnerHTML={ {__html: story.headline }} className={classname}/>
        <div className="author-title">
          {story['authors'][0]['name'] || story['author-name']}
        </div>
    </a>
  </div>
}

function RelatedStories(props) {
  return !props.stories.length ? null : <div className="related_stories">
      <h4 className="related_stories-heading"> Related Stories </h4>
      <RelatedStoryCard story={_.head(props.stories)} showImage={true}/>
      {_.drop(props.stories).map((story, index) => <RelatedStoryCard key={index} story={story} showImage={false} />)}
    </div>
}

export { RelatedStories };

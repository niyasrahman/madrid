const _ = require("lodash");
const React = require("react");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function RelatedStoryCard(props){
  classname = props.showImage ? 'story-title story-title-bold' : 'story-title';
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
            imgParams={{auto:['format', 'compress']}}/>
        </figure>
      }
        <h2 dangerouslySetInnerHTML={ {__html: story.headline }} className={classname}/>
        <div className="author-title">
          {story['author-name']}
        </div>
    </a>
  </div>
}

function RelatedStories(props) {
  return <div className="related_stories">
    <h4 className="related_stories-heading"> Related Stories </h4>
    <RelatedStoryCard story={_.head(props.stories)} showImage={true}/>
    {_.drop(props.stories).map((story, index) => <RelatedStoryCard key={index} story={story} showImage={false} />)}
  </div>
}

exports.RelatedStories = RelatedStories;

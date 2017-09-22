const _ = require("lodash");
const React = require("react");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryCard(props){
  if(props.showImage){
    classname = 'story-title story-title-bold';
  } else {
    classname = 'story-title';
  }
  return <div className="related_stories-story-card">
    <a href={"/" + props.story.slug} >
      {
        props.showImage && <figure className="story-card-image">
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress']}}/>
        </figure>
      }
        <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} className={classname}/>
        <div className="author-title">
          {props.story['author-name']}
        </div>
    </a>
  </div>
}

function RelatedStories(props) {
  return <div className="related_stories">
    <h4 className="related_stories-heading"> Related Stories </h4>
    <StoryCard story={_.head(props.stories)} showImage={true} key={_.head(props.stories).id}/>
    {_.drop(props.stories).map((story, index) => <StoryCard key={index} story={story} showImage={false} />)}
  </div>
}

exports.RelatedStories = RelatedStories;

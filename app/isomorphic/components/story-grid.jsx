const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryGridStoryItem(props) {
  return <Link href={"/" + (props.story.parentCollection ? props.story.generatedSlug : props.story.slug) } className="story-grid-item">
      <figure className="story-grid-item-image qt-image-16x9">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[16,9]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress']}}/>
      </figure>
      <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <span className="story-grid-item-author">{props.story['author-name']}</span>
    </Link>;
}

function StoryGrid(props) {
  return <div className="story-grid">
    {props.stories.map((story, index) => <StoryGridStoryItem story={story} key={index}></StoryGridStoryItem>)}
  </div>;
}

exports.StoryGrid = StoryGrid;

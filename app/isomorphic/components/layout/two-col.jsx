const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { StoryCard } = require("../basic/story-card.jsx")

function TwoCol(props) {
  const storyCardConfig = {
    subheadline: true,
    image: true
  }
  return (
    <div className="two-col">
      <div className="two-col__title">
        <h2 className="section--title--large section--health-fit--large">{props.collectionName}</h2>
      </div>
      <div className="two-col__first">
        {props.stories.slice(0,3).map(storyObj =>
          <MediaObject story={storyObj.story} key={storyObj.id}/>
        )}
      </div>
      <div className="two-col__last">
        <StoryCard story={props.stories[3]} config={storyCardConfig}/>
      </div>
    </div>
  )
}

function MediaObject({story}) {
  return story && <Link href={"/" + story.slug} className="two-col__first__card bg--white bg--shadow">
    <div className="two-col__first__card__img align--left">
      <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
        aspectRatio={[4,3]}
        defaultWidth={480} widths={[250,480,640]}
        imgParams={{auto:['format', 'compress']}}/>
    </div>
    <div className="two-col__first__card__content section--content-3">
      <h2 dangerouslySetInnerHTML={ {__html: story.headline }} />
      <div className="author--small">
        {story['author-name']}
      </div>
    </div>
  </Link>
}


exports.TwoCol = TwoCol;

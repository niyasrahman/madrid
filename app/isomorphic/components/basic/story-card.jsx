const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryCard(props) {
  return !props.story ? null : <Link href={"/" + props.story.slug}>
      {props.type === 'imageBackground' ?
        <StoryCardBgImage story={props.story} /> :
        <StoryCardSimple story={props.story} />}
    </Link>;
}

function StoryCardBgImage(props) {
  return <div className="three-col__first">
    <figure className="story-card-image qt-image-2x3">
      <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
        aspectRatio={[2,3]}
        defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
        imgParams={{auto:['format', 'compress']}}/>
    </figure>
    <div className="three-col__first__content">
      <h2>Lin-Manuel Miranda says Donald Trump is spreading ‘a virulent strain of a virus’</h2>
      <div className="author--title">Jonnathan Doe</div>
    </div>
  </div>
}

function StoryCardSimple(props) {
  return <div className="story-card bg--shadow bg--white">
      <div className="story-card__img">
        <figure className="story-card-image qt-image-16x9">
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress']}}/>
        </figure>
      </div>
      <div className="section--card--1">
        <div className="section--title--small section--business">{props.story.sections[0].name}</div>
        <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
        <p dangerouslySetInnerHTML={ {__html: props.story.subheadline }} />
        <div className="author--title">
          {props.story['author-name']}
        </div>
      </div>
    </div>
}

exports.StoryCard = StoryCard;

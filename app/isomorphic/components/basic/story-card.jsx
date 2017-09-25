const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryCard(props) {
  {/* This `props.story` object includes `id`, `type` and actual `story` object. We only
    need actual story object.*/}
  const storyObj = props.story ? props.story.story : null;
  return !storyObj ? null : <Link href={"/" + (storyObj['parent-collection'] ? storyObj['generated-slug'] : storyObj.slug) }>
      {props.type === 'imageBackground' ?
        <StoryCardBgImage story={storyObj} aspectRatio={props.config ? props.config.imageAspectRatio : null}/> :
        <StoryCardSimple story={storyObj} config={props.config}/>}
    </Link>;
}

function StoryCardBgImage(props) {
  return <div className="three-col__first story-card">
    <figure className="story-card-image qt-image-2x3">
      <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
        aspectRatio={props.aspectRatio ? props.aspectRatio : '[4:3]'}
        defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
        imgParams={{auto:['format', 'compress']}}/>
    </figure>
    <div className="three-col__first__content">
      <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <div className="author--title">{props.story['author-name']}</div>
    </div>
  </div>
}

function StoryCardSimple(props) {
  const sectionColor = {
    borderBottom: 'solid 2px ' + props.story['section-color']
  }
  // We can customize this component by passing down a config
  // We can enable Image, Subheadline and Section name if the config values are true.
  // By default we'll hide all.
  return <div className="story-card bg--shadow bg--white">
      { props.config && props.config.image &&
      <div className="story-card__img">
        <figure className="story-card-image qt-image-16x9">
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress']}}/>
        </figure>
      </div> }
      <div className="section--card--1">
        { props.config && props.config.section && <div className="section--title--small" style={sectionColor}>
          {props.story.sections[0].name}
        </div> }
        <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
        { props.config && props.config.subheadline && <p dangerouslySetInnerHTML={ {__html: props.story.subheadline }} /> }
        <div className="author--title">
          {props.story['author-name']}
        </div>
      </div>
    </div>
}

exports.StoryCard = StoryCard;

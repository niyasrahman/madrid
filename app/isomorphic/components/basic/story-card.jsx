const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function StoryCard(props) {
  // The `props.story` can be an item from items of a collection or a story itself.
  // assigning it accordinlgy.
  const story = props.story.type === 'story' && props.story.story ? props.story.story : props.story;
  return !story ? null : <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) }>
      {props.type === 'imageBackground' ?
        <StoryCardBgImage story={story} aspectRatio={props.config ? props.config.imageAspectRatio : null}/> :
        <StoryCardSimple story={story} config={props.config}/>}
    </Link>;
}

function StoryCardBgImage(props) {
  const author = {
    name: props.story['author-name']
  }
  return <div className="story-card">
    <figure className="story-card__image story-card__image--cover">
      <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
        aspectRatio={props.aspectRatio ? props.aspectRatio : '[4:3]'}
        defaultWidth={480}
        imgParams={{auto:['format', 'compress']}}/>
    </figure>
    <div className="story-card__content story-card__content--over-image">
      <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <Author author={author} />
    </div>
  </div>
}

function StoryCardSimple(props) {
  const sectionBorder = {
    borderBottom: 'solid 2px ' + props.story['section-color']
  }
  const author = {
    name: props.story['author-name']
  }
  // We can customize this component by passing down a config
  // We can enable Image, Subheadline and Section name if the config values are true.
  // By default we'll hide all.
  return <div className="story-card story-card--simple">
      { props.config && props.config.image &&
        <figure className="story-card__image story-card__image--16x9">
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            imgParams={{auto:['format', 'compress']}}/>
        </figure> }
      <div className="story-card__content">
        { props.config && props.config.section &&
          <SectionName sectionBorder={sectionBorder} name={props.story.sections[0].name}/>
        }
        <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
        { props.config && props.config.subheadline && <p dangerouslySetInnerHTML={ {__html: props.story.subheadline }} /> }
        <Author author={author} />
      </div>
    </div>
}

exports.StoryCard = StoryCard;

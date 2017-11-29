const React = require("react");
const classNames = require('classnames');

const { Link } = require("@quintype/framework/components/link");
const { ResponsiveImage } = require("@quintype/framework/components/responsive-image");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function StoryCard(props) {
  // The `props.story` can be an item from items of a collection or a story itself.
  // assigning it accordinlgy.
  const story = props.story && props.story.type === 'story' && props.story.story ? props.story.story : props.story;
  return !story ? null : <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug)} className="story-card-link">
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
        widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
        imgParams={{auto:['format', 'compress'], fit:'max'}}/>
    </figure>
    <div className="story-card__content story-card__content--over-image">
      <h2 className="story-card__heading" dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <Author author={author} />
    </div>
  </div>
}

function StoryCardSimple(props) {
  const inlineStyle = {
    borderBottom: 'solid 2px ' + props.story['section-color']
  }
  const author = {
    name: props.story['author-name']
  }
  // We can customize this component by passing down a config
  // We can enable Image, Subheadline and Section name if the config values are true.
  // By default we'll hide all.
  return <div className={classNames('story-card', { 'story-card--transparent': props.config && props.config.transparent }) }>
      { props.config && props.config.image &&
        <figure className="story-card__image story-card__image--16x9">
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress'], fit:'max'}}/>
        </figure> }
      <div className={classNames('story-card__content', { 'story-card__content--transparent': props.config && props.config.transparent }) }>
        { props.config && props.config.section &&
          <SectionName inlineStyle={inlineStyle} name={props.story.sections[0]['display-name']}/>
        }
        <h2 className="story-card__heading" dangerouslySetInnerHTML={ {__html: props.story.headline }} />
        { props.config && props.config.subheadline && <p className="story-card__description" dangerouslySetInnerHTML={ {__html: props.story.subheadline }} /> }
        <Author author={author} />
      </div>
    </div>
}

exports.StoryCard = StoryCard;

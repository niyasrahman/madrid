const React = require("react");
const TimeAgo = require('react-timeago').default;
const classNames = require('classnames');

const { Link } = require("@quintype/framework/components/link");
const { ResponsiveImage } = require("@quintype/framework/components/responsive-image");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function MediaObject({story, config}) {
  config = config || {};
  const inlineStyle = {
    borderBottom: 'solid 2px ' + story['section-color']
  }
  const author = {
    name: story['author-name'],
    date: config.storyTime && story['first-published-at']
  }
  return story &&
    <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug)}
      className={classNames('media', {'media--bg-white': !config.noBackground, 'media--with-shadow': !config.noBackground})}>
      <div className="media__img">
        <figure>
          <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
            aspectRatio={config.aspectRatio ? config.aspectRatio : '[4:3]'}
            defaultWidth={480} widths={[250,480,640]}
            imgParams={{auto:['format', 'compress'], fit:'max'}}/>
        </figure>
      </div>
      <div className={classNames('media__content', {'media__content--enlarged': config.enlarged})}>
        { config.section && <SectionName inlineStyle={inlineStyle} name={story.sections[0]['display-name']}/>}
        <h2 className={classNames('media-title', {'media__title--enlarged': config.enlarged})}
          dangerouslySetInnerHTML={ {__html: story.headline }} />
        <Author author={author}/>
      </div>
    </Link>
}

function MediaObjectsList(props) {
  return (
    <div>
      {props.stories.slice(0,3).map(storyObj =>
        <MediaObject story={storyObj.story} key={storyObj.id}/>
      )}
    </div>
  )
}

exports.MediaObject = MediaObject;
exports.MediaObjectsList = MediaObjectsList;

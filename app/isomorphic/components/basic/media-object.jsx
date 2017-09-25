const React = require("react");
const TimeAgo = require('react-timeago').default;

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const classNames = require('classnames');

function MediaObject({story, config}) {
  config = config || {};
  const sectionColor = {
    borderBottomColor: story['section-color']
  }
  return story &&
    <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug)}
      className={classNames('two-col__first__card', {'bg--white': !config.noBackground, 'bg--shadow': !config.noBackground})}>
      <div className="two-col__first__card__img align--left">
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={config.aspectRatio ? config.aspectRatio : '[4:3]'}
          defaultWidth={480} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress']}}/>
      </div>
      <div className={classNames('two-col__first__card__content section--content-3', {'two-col__first__card__content--enlarged': config.enlarged})}>
        <div className="section--title--small section--travel" style={sectionColor}>
          {story.sections[0]['display-name']}
        </div>
        <h2 className={classNames({'two-col__first__card__title--enlarged': config.enlarged})}
          dangerouslySetInnerHTML={ {__html: story.headline }} />
        <div className="author--small">
          <p>{story['author-name']}</p>
          {
            config.storyTime && <p><TimeAgo date={story['first-published-at']} /></p>
          }
        </div>
      </div>
    </Link>
}

exports.MediaObject = MediaObject;

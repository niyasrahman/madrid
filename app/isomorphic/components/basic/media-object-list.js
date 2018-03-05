import React from "react";
import TimeAgo from 'react-timeago';
import classNames from 'classnames';
import _ from "lodash";
import { Link, ResponsiveImage } from "@quintype/components";

import { Author } from "./author.js";
import { ImageFallback } from "./image-fallback.js";
import { SectionName } from "./section-name.js";

function MediaObject({story, config, sectionColor}) {
  config = config || {};
  const inlineStyle = {
    borderBottom: `solid 2px ${sectionColor}`
  }
  const author = {
    name: _.get(story, ['authors', 0, 'name'], story['author-name']),
    id: _.get(story, ['authors' , 0, 'id'] , story['author-id'])
  }
  const date = config.storyTime && story['first-published-at'];
  return story &&
    <Link href={"/" + story.slug}
      className={classNames('media', {'media--bg-white': !config.noBackground, 'media--with-shadow': !config.noBackground})}>
      <div className="media__img">
        { story["hero-image-s3-key"] ?
        <figure>
          <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
            aspectRatio={config.aspectRatio ? config.aspectRatio : [4, 3]}
            defaultWidth={480} widths={[250,480,640]}
            imgParams={{auto:['format', 'compress'], fit:'max'}}/>
        </figure> :
        <ImageFallback /> }
      </div>
      <div className={classNames('media__content', {'media__content--enlarged': config.enlarged})}>
        { config.section && <SectionName hideLink inlineStyle={inlineStyle} name={story.sections[0]['display-name'] || story.sections[0]['name']}/>}
        <h2 className={classNames('media-title', {'media__title--enlarged': config.enlarged})}
          dangerouslySetInnerHTML={ {__html: story.headline }} />
        <Author author={author} date={date}/>
      </div>
    </Link>
}

function MediaObjectsList(props) {
  return (
    <div>
      {props.stories.slice(0,3).map(storyObj =>{
          const story = storyObj && storyObj.story ? storyObj.story : storyObj;
          return <MediaObject story={story} key={story.id}/>
        }
      )}
    </div>
  )
}

export { MediaObject };
export { MediaObjectsList };

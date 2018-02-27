import React from "react";
import { Link } from "@quintype/components";

import { MediaObject } from "../basic/media-object-list.js"
import { SectionName } from "../basic/section-name.js";

import { DfpAd } from "../dfp-ads";

function FullscreenMediaList(props) {
  const mediaObjectConfig = {
    section: !props.hideSectionName,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }

  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  const limit = props.config.limit || 3;

  if(props.stories.length < 1) {
    return <div></div>
  }

  return <div className="fullscreen-media-list">
    <div className="fullscreen-media-list__content component-wrapper">
      {
        !props.HideSectionName && <SectionName hideLink={true} inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
      }
      <div className="col-8">
        {props.stories.slice(0,limit)
          .map(storyObj => {
            const story = storyObj && storyObj.story ? storyObj.story : storyObj;
            return <div className="fullscreen-media-list__object" key={story.id}>
              <MediaObject story={story} config={mediaObjectConfig} sectionColor={props.config['collection-color']}/>
            </div>
          }
        )}
        { !props.hideLoadmore &&
          <div className="fullscreen-media-list__load-more">
            {
              props.getMoreStories ? <a onClick={props.getMoreStories}>Load more</a> :
              <Link href={'/' + props.config['collection-slug']}>
                Read more
              </Link>
            }
          </div>
        }
      </div>
      <div className="col-4">
        {
          props.adSlot && <div className="app-ad app-ad--vertical">
            <DfpAd adtype="Vertical-Ad" layoutName="FullscreenMediaList" collectionSlug={props.config['collection-slug']}/>
          </div>
        }
      </div>
    </div>
  </div>
}

export { FullscreenMediaList };

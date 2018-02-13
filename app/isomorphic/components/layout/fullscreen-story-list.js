import React from "react";
import { Link } from "@quintype/components";

import { MediaObject } from "../basic/media-object-list.js"
import { SectionName } from "../basic/section-name.js";

import { DfpAd } from "../dfp-ads";

function FullscreenStoryList(props) {
  if(props.stories.length < 1)
    return <div></div>;

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

  return <div className="fullscreen-media-list">
    <div className="fullscreen-media-list__content component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
      <div className="col-8">
        {props.stories.map(storyObj => {
            const story = storyObj && storyObj.story ? storyObj.story : storyObj;
            return <div className="fullscreen-media-list__object" key={story.id}>
              <MediaObject story={story} config={mediaObjectConfig}/>
            </div>
          }
        )}

        { !props.noMoreStories && <div className="fullscreen-media-list__load-more">
          <a onClick={props.onLoadMore}>Load more</a>
        </div> }

      </div>
      <div className="col-4">
        <div className="app-ad app-ad--vertical">
          <DfpAd adtype="Vertical-Ad"/>
        </div>
      </div>
    </div>
  </div>
}

export { FullscreenStoryList };

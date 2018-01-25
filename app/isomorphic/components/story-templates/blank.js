import React from "react";

import { ResponsiveImage } from "@quintype/components";
import { StoryHeaderCard } from "../story-page-components/story-header-card.js";
import { StoryTags } from "../story-page-components/story-tags.js";
import { RelatedStories } from "../story-page-components/related-stories.js";
import { StoryPageCard } from "../story-page-components/story-page-card.js";
import { DfpAd } from "../dfp-ads";
import { MetypeScripts } from "../story-page-components/metype-component/metype-script-loader";
import { MetypeWidget } from "../story-page-components/metype-component/metype-widget";
import { MetypeFeedWidget } from "../story-page-components/metype-component/metype-feed-widget";

function BlankStoryTemplate(props) {
  return <article className="blank-story">
      <figure className="blank-story-hero-image qt-image-16x9">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[9,3]}
          defaultWidth={480} widths={[250,480,640,960,1200]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 98%"
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <div className="blank-story--wrapper">
        <div className="blank-story--content">
          <StoryHeaderCard story={props.story}/>
          {props.story.cards.map((card, index) => <StoryPageCard key={index} card={card} story={props.story}/>)}
          <StoryTags tags={props.story.tags} />
          <div className="blank-story__aside">
            <div className="ads-320x250">
              <DfpAd adtype="Demo-Ad" />
            </div>
            <RelatedStories stories = {props.relatedStories}></RelatedStories>
          </div>
          <MetypeScripts />
          <MetypeFeedWidget />
          <MetypeWidget
            host={"http://metype.staging.quintype.com/"}
            accountID={2}
            pageURL={'http://metype.staging.quintype.com/'} />
        </div>
      </div>
    </article>
}



function BlankStory(props) {
  return <div className="story-grid">
    <BlankStoryTemplate {...props}></BlankStoryTemplate>
  </div>
}

export { BlankStory };

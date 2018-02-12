import React from "react";

import { ResponsiveImage } from "@quintype/components";
import { StoryHeaderCard } from "../story-page-components/story-header-card.js";
import { StoryTags } from "../story-page-components/story-tags.js";
import { RelatedStories } from "../story-page-components/related-stories.js";
import { StoryPageCard } from "../story-page-components/story-page-card.js";
import { DfpAd } from "../dfp-ads";
import { MetypeCommentingWidget } from "@metype/components";
import { breakpoint } from "../../../utils/breakpoint";

function BlankStoryTemplate(props) {
  const metypeConfig = props.config['metype-config'];
  const StoryCards = props.story.cards.map((card, index) => {
    if(index === 0) {
      return <div className="blank-story__card--with-ad">
        <StoryPageCard key={card.id} card={card} story={props.story}/>
        <div className="app-ad app-ad--story-horizontal">
          <DfpAd adtype="Story-Bottom-Ad"/>
        </div>
      </div>
    } else {
        return <StoryPageCard key={card.id} card={card} story={props.story}/>
    }
  });
  return <article className="blank-story">
      <figure className="blank-story-hero-image qt-image-16x9">
        { breakpoint('tablet') ?
            <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[9,3]}
            defaultWidth={480} widths={[250,480,640,960,1200]} sizes="(max-width: 500px) 98%"
            imgParams={{auto:['format', 'compress'], fit:'max'}} />
            :
            <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[16,9]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 98%"
            imgParams={{auto:['format', 'compress'], fit:'max'}} />
        }

      </figure>
      <div className="blank-story--wrapper">
        <div className="blank-story--content">
          <StoryHeaderCard story={props.story}/>
          {StoryCards}
          <StoryTags tags={props.story.tags} />
          <div className="blank-story__aside">
            <div className="app-ad app-ad--story-mrec">
              <DfpAd adtype="Story-Mrec"/>
            </div>
            <RelatedStories stories = {props.relatedStories}></RelatedStories>
          </div>
        </div>
        <div className="app-ad app-ad--story-horizontal">
          <DfpAd adtype="Story-Bottom-Ad"/>
        </div>
        <div className="blank-story--metype-widget">
          <MetypeCommentingWidget
            host={metypeConfig.host}
            accountId={metypeConfig.accountId}
            pageURL={generateHostUrl(props.story)}
            primaryColor={metypeConfig.primaryColor}/>
        </div>
      </div>
    </article>
}



function generateHostUrl(story = {}){
  if(global.location){
    return `${global.location.origin}/${story.slug}`;
  }
}


function BlankStory(props) {
  return <div className="story-grid">
    <BlankStoryTemplate {...props}></BlankStoryTemplate>
  </div>
}

export { BlankStory };

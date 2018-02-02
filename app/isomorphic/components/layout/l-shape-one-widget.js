import React from "react";
import { Link } from "@quintype/components";
import assetify from '@quintype/framework/assetify';
import { StoryCard } from "../basic/story-card.js"
import { NewsletterSub } from "../basic/newsletter-sub.js"
import { SectionName } from "../basic/section-name.js";
import { Polltype } from "../polltype";
import ArrowImg from '../../../assets/icons/readmore_arrow.svg';


function LShapeOneWidget(props) {
  const primarStoryCardConfig = {
    section: true,
    subheadline: true,
    image: true,
    imageAspectRatio: [4,3]
  }
  const storyListConfig = {
    image: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }

  if(props.stories.length < 1) {
    return <div></div>
  }

  return (
    <div className="l-shape-grid component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large" section={props.config['collection-section']}/>
      <div className="l-shape-grid__first-row">
        <div className="feature-story">
          <StoryCard story={props.stories[0]} config={primarStoryCardConfig} type="imageBackground"/>
        </div>
        <div className="polltype-element">
          <Polltype id="391" width="300px" height="480px" />
        </div>
      </div>

      <div className="l-shape-grid__second-row">
        {props.stories.slice(1,4).map((story) => {
          return <div className="l-shape-grid__story" key={story.id}>
            <StoryCard config={storyListConfig}
              story={story}/>
          </div>
        })}
      </div>
      <Link href={'/' + props.config['collection-slug']} className="l-shape-grid__read-more">
        Read more
        <img src={assetify(ArrowImg)} alt="Arrow"/>
      </Link>
    </div>
  )

}

export { LShapeOneWidget };

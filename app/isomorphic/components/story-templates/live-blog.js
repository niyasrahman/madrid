import React from "react";

import { ResponsiveImage } from "@quintype/components";
import { StoryHeaderCard } from "../story-page-components/story-header-card.js";
import { StoryPageCard } from "../story-page-components/story-page-card.js";
import { LiveBlogKeyEvents } from "../story-page-components/live-blog-key-events.js";
import TimeAgo from 'react-timeago';
import { DateTime } from 'luxon';
import {MetypeScripts} from "../story-page-components/metype-component/metype-script-loader";
import {MetypeWidget} from "../story-page-components/metype-component/metype-widget";
import {MetypeFeedWidget} from "../story-page-components/metype-component/metype-feed-widget";
import { breakpoint } from "../../../utils/breakpoint";
import {MetypeConfig} from "../../../../config/metype-config";

class LiveBlogTemplate extends React.Component {
  constructor(props){
    super(props);
  }

  formatter(value, unit, suffix, date, defaultFormatter) {
    return DateTime.fromMillis(date).toFormat('dd LLL, hh:mm a');
  }

  generateHostUrl(story = {}){
    if(global.location){
      return `${global.location.origin}/${story.slug}`;
    }
  }

  loadWidget(){
    return (<MetypeWidget
      host={MetypeConfig.host}
      accountId={MetypeConfig.accountId}
      pageURL={this.generateHostUrl(this.props.story)} />);
  }

  render(){
    return <article className="live-blog-story blank-story">
      <figure className="live-blog-story-hero-image blank-story-hero-image qt-image-16x9">
        { breakpoint('tablet') ?
          <ResponsiveImage slug={this.props.story["hero-image-s3-key"]} metadata={this.props.story["hero-image-metadata"]}
                           aspectRatio={[9,3]}
                           defaultWidth={480} widths={[250,480,640,960,1200]} sizes="(max-width: 500px) 98%"
                           imgParams={{auto:['format', 'compress'], fit:'max'}} />
          :
          <ResponsiveImage slug={this.props.story["hero-image-s3-key"]} metadata={this.props.story["hero-image-metadata"]}
                           aspectRatio={[16,9]}
                           defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 98%"
                           imgParams={{auto:['format', 'compress'], fit:'max'}} />
        }
      </figure>
      <div className="live-blog-story__extra-wrapper">
        <div className="live-blog-story--wrapper blank-story--wrapper">
          <StoryHeaderCard story={this.props.story}/>
        </div>
        <LiveBlogKeyEvents story={ this.props.story } />
        <div className="live-blog-story--wrapper blank-story--wrapper">
          <div className="live-blog-story--content blank-story--content">
            {this.props.story.cards.map((card, index) => <div className="story-cards" id={card.id} key={index}>
              <TimeAgo date={card['card-added-at']}  className="card-added-at" formatter={this.formatter}/>
              <StoryPageCard key={index} card={card} story={this.props.story}/>
              <p className="card-updated-at">Last updated <TimeAgo date={card['card-updated-at']}/></p>
                {((this.props.story.cards.length - 1) === index) && this.loadWidget()}
            </div>)}
          </div>
        </div>
      </div>
    </article>
  }
}

class LiveBlogStory extends React.Component {
  render() {
    return <div className="story-grid">
      <LiveBlogTemplate {...this.props}></LiveBlogTemplate>
    </div>
  }
}

export { LiveBlogStory };

import React from "react";

import { BlankStory } from "../story-templates/blank.js";
import { LiveBlogStory } from "../story-templates/live-blog.js";
import { InfiniteStoryBase } from "@quintype/components";

export function StoryPageContent({story, relatedStories, index, preview = false }, config) {
  if(story['story-template'] === 'live-blog') {
    return <LiveBlogStory story={story} config={config} />;
  } else {
    return <BlankStory story={story} config={config} preview={preview} relatedStories={index === 0 ? relatedStories : []}/>
  }
}

const FIELDS = "id,headline,slug,url,hero-image-s3-key,hero-image-metadata,first-published-at,last-published-at,alternative,published-at,author-name,author-id,sections,story-template,cards,tags,authors";
function storyPageLoadItems(pageNumber) {
  return fetch(`/api/v1/stories?fields=${FIELDS}&limit=5&offset=${5 * pageNumber}`)
           .then(response => {
             return response.json();
           })
           .then(response => response.stories.map(story => ({story: story, relatedStories: []})));
}

export class StoryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  doAnalytics(story) {
    const { registerPageView } = require("@quintype/framework/client/analytics");
    registerPageView({type: "story-page", story: story}, `/${story.slug}`);
  }

  render() {
    return <InfiniteStoryBase {...this.props}
              render={(storyProps) => StoryPageContent(storyProps, this.props.config)}
              loadItems={storyPageLoadItems}
              onItemFocus={(item) => console.log(`Story In View: ${item.story.headline}`)}
              onInitialItemFocus={(item) => this.doAnalytics(item.story)} />
  }
}

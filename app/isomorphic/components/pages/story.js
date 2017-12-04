import React from "react";

import { BlankStory } from "../story-templates/blank.js";
import { LiveBlogStory } from "../story-templates/live-blog.js";
import { InfiniteStoryBase } from "@quintype/components"

function storyPageContent({story, index, relatedStories}) {
  if(story['story-template'] == 'live-blog') {
    return <LiveBlogStory story={story} />;
  } else {
    return <BlankStory story={story} relatedStories={index == 0 ? relatedStories : []}/>
  }
}

const FIELDS = "id,headline,slug,url,hero-image-s3-key,hero-image-metadata,first-published-at,last-published-at,alternative,published-at,author-name,author-id,sections,story-template,cards,tags";
function storyPageLoadItems(pageNumber) {
  // Replace this with your logic for loading stories
  return global.superagent
           .get("/api/v1/stories", {fields: FIELDS, limit:5, offset:5*pageNumber})
           .then(response => response.body.stories.map(story => ({story: story, relatedStories: []})));
}

class StoryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return <InfiniteStoryBase {...this.props}
              render={(storyProps) => storyPageContent(storyProps, this.props.data.relatedStories)}
              loadItems={storyPageLoadItems}
              onItemFocus={(item) => console.log(`Story In View: ${item.story.headline}`)}
              onInitialItemFocus={(item) => console.log(`Do Analytics ${item.story.headline}`)} />
  }
}

export { StoryPage };

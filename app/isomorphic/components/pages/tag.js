import React from "react";
import { LoadMoreStoriesBase } from "@quintype/components";
import { FullscreenStoryList } from "../layout/fullscreen-story-list.js";

class TagPage extends React.Component {

  render() {
    const stories = this.props.data.stories;
    return <LoadMoreStories {...this.props} stories={stories} />;
  }
}

function LoadMoreStories(props) {
  const storyFields = 'headline,subheadline,summary,sections,tags,author-name,author-id,authors,updated-at,last-published-at,published-at,updated-at,first-published-at,hero-image-metadata,hero-image-s3-key,story-content-id,slug,id,seo,story-template';
  const data = Object.assign(props.data, {stories: props.stories});
  const storiesPerPage = 20;

  return <LoadMoreStoriesBase template={LoadMoreStoriesTemplate}
      fields={storyFields}
      params={{ 'tag-slugs': props.data.tagSlug }}
      data={data}
      storiesPerPage={storiesPerPage} />;

}

function LoadMoreStoriesTemplate(props) {
  const config = {
    'collection-name': `Results for ${props.tagName}`,
    'collection-color': '#e32313',
    hideLoadmore: true,
    limit: 20
  }
  return <div>
    {
      props.stories.length ?
      <FullscreenStoryList
        stories={props.stories}
        config={config}
        onLoadMore={props.onLoadMore}
        noMoreStories={props.noMoreStories} /> :
      <div className="component-wrapper">
        <p>No stories found for tag '<strong>{props.tagName}</strong>'.</p>
      </div>
    }
  </div>;
}

export { TagPage };

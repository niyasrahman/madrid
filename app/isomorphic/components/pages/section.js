import React from "react";
import { LoadMoreStoriesBase, LoadMoreCollectionStories } from "@quintype/components";

import { OneMainCardSlider } from "../layout/one-main-card-slider.js";
import { FullscreenStoryList } from "../layout/fullscreen-story-list.js";
import { ThreeStoryCards } from "../layout/three-story-cards.js";
import { OneStoryCardSixStoryList } from "../layout/onestorycard-sixstorylist.js";
import { CardGroup } from "../layout/card-group.js";

class SectionPage extends React.Component {
  render() {
    const stories = this.props.data.collection.items;

    return <LoadMoreStories {...this.props} stories={stories} />
  }
}

function getCollectionConfig(collection) {
  return {
      'collection-name': collection.name,
      'collection-slug': collection.slug,
      'collection-color': collection.color
    }
}

function LoadMoreStoriesTemplate(props) {
  const config = getCollectionConfig(props.collection);
  return <div>
    <CardGroup stories={props.stories.slice(0,4)} config= {config}/>
    <OneMainCardSlider stories={props.stories.slice(4,11)} config= {config}/>
    <ThreeStoryCards stories={props.stories.slice(11,14)} config= {config}/>
    <OneStoryCardSixStoryList stories={props.stories.slice(14,21)} config= {config}/>
    <FullscreenStoryList adSlot={true}
        config= {config}
        stories={props.stories.slice(21)}
        onLoadMore={props.onLoadMore}
        noMoreStories={props.noMoreStories} />
  </div>;
}

function LoadMoreStories(props) {
  const collection = props.data.section.collection || null;
  const storyFields = 'headline,subheadline,summary,sections,tags,author-name,author-id,authors,updated-at,last-published-at,published-at,updated-at,first-published-at,hero-image-metadata,hero-image-s3-key,story-content-id,slug,id,seo,story-template';
  const data = Object.assign(props.data, {stories: props.stories});
  const storiesPerPage = 24;

  return collection ?
    <LoadMoreCollectionStories template={LoadMoreStoriesTemplate}
      collectionSlug={collection.slug}
      params={{ 'item-type': 'story' }}
      data={data}
      storiesPerPage={storiesPerPage} /> :
    <LoadMoreStoriesBase template={LoadMoreStoriesTemplate}
      fields={storyFields}
      params={{ 'section-id': props.data.section.id }}
      data={data}
      storiesPerPage={storiesPerPage} />;

}

export { SectionPage };

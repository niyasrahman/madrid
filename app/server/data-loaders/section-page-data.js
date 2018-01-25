import _ from 'lodash';

import {Story, Collection} from "@quintype/framework/server/api-client";
import {sorterToCacheKey, storyToCacheKey} from "@quintype/framework/server/caching";
import {getNavigationMenuArray} from "./menu-data";

export function loadSectionPageData(client, sectionId, config) {
  const section = _.find(config.sections, function(section) { return section.id === sectionId; });
  const sectionSlug = _.isNull(section.collection) ? null : section.collection.slug;
  if (sectionSlug) {
    return Collection.getCollectionBySlug(client, sectionSlug)
      .then(response => {
        let collection = response.collection;
        const menu = config.layout.menu;
        const structuredMenu = getNavigationMenuArray(menu);
        const collectionMenuObject = _.find(menu, function(menuCollectionItem) { return menuCollectionItem['section-slug'] === collection.slug; });
        // Setting the collection color which can be changed from platform settings. Fallback to one color if no
        // menu color is set.
        collection.color = collectionMenuObject ? collectionMenuObject.data.color : '#6093f2';
        collection.items
          .filter((item) => item.type === 'story')
          .forEach(({story})=>{
          const menuObject = _.find(menu, function(menuItem) { return story && story.sections[0] && menuItem['section-slug'] === story.sections[0].slug; });
          story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
        })

        return {
          section: section,
          collection: collection,
          navigationMenu: structuredMenu,
          cacheKeys: response.cacheKeys(config["publisher-id"])
        }
      });
  } else {
    const storyFields = 'headline,subheadline,summary,sections,tags,author-name,author-id,authors,updated-at,last-published-at,published-at,updated-at,first-published-at,hero-image-metadata,hero-image-s3-key,story-content-id,slug,id,seo,story-template';
    return Story.getStories(client, 'top', {'section-id': section.id, 'fields': storyFields})
      .then(stories => {
        const menu = config.layout.menu;
        const collectionMenuObject = _.find(menu, function(menuCollectionItem) { return menuCollectionItem['section-slug'] === section.slug; });
        const allStories = stories.map(story => story.asJson());

        let collection = {
          items: [],
          type: 'story',
          name: section['display-name'] || section.name,
          slug: section.slug,
          color: collectionMenuObject ? collectionMenuObject.data.color : '#6093f2'
        };

        _.forEach(allStories, function(story){
          collection.items.push(story)
        })

        return {
          section: section,
          collection: collection,
          navigationMenu: getNavigationMenuArray(menu),
          cacheKeys: [sorterToCacheKey(config["publisher-id"], "top", sectionId)].concat(stories.map(story => storyToCacheKey(config["publisher-id"], story)))
        }
      })
  }
}

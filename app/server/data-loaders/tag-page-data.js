import _ from "lodash";

import {Story} from "@quintype/framework/server/api-client";
import {storyToCacheKey} from "@quintype/framework/server/caching";
import {getNavigationMenuArray} from "./menu-data";

export function loadTagPageData(client, tagSlug, config) {
  return Story.getStories(client, 'top', {'tag': tagSlug, 'limit': '20'})
    .then(stories => {
      const menu = config.layout.menu;
      const navigationMenu = getNavigationMenuArray(menu);
      return {
        tag: tagSlug,
        stories: getProcessedStories(stories, menu, config.sections),
        navigationMenu: navigationMenu,
        cacheKeys: stories.map(story => storyToCacheKey(config["publisher-id"], story))
      }
    });
}

function getProcessedStories(stories, menu, sections) {
  const processedStories = [];
  // TODO: Optimize
  stories.forEach(story => {
    story = story.story;
    const menuObject = _.find(menu, function(menuItem) { return story && story.sections[0] && menuItem['section-slug'] === story.sections[0].slug; });
    story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
    processedStories.push(story);
  })
  return processedStories;
}

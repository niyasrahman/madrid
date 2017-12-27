import _ from "lodash";

import {Story} from "@quintype/framework/server/api-client";
import {storyToCacheKey} from "@quintype/framework/server/caching";
import {getNavigationMenuArray} from "./menu-data";

export function loadSearchPageData(client, query, config) {
  return Story.getSearch(client, {'q': query, 'limit': '20'})
    .then(result => {
      const menu = config.layout.menu;
      const navigationMenu = getNavigationMenuArray(menu);
      return {
        stories: getProcessedStories(result.stories, menu, config.sections),
        total: result.total,
        navigationMenu: navigationMenu,
        cacheKeys: result.stories.map(story => storyToCacheKey(config["publisher-id"], story)),
        query: query
      }
    });
}

function getProcessedStories(stories, menu, sections) {
  const processedStories = [];
  // TODO: Optimize
  stories.forEach(story => {
    story = story.story;
    const menuObject = _.find(menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
    story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
    processedStories.push(story);
  })
  return processedStories;
}

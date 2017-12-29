import _ from 'lodash';

import {Story} from "@quintype/framework/server/api-client";
import {getNavigationMenuArray} from "./menu-data";


export function loadStoryPageData(client, params, config){
  var cacheKeys = [];
  let story = {};
  return Story.getStoryBySlug(client, params.storySlug)
    .then(storyResponse => {
      cacheKeys = storyResponse.cacheKeys(config["publisher-id"])
      story = storyResponse.asJson();
      const menuObject = _.find(config.layout.menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
      story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
      const parentSectionId = story.sections[0]['parent-id'];
      const parentSection = _.find(config.sections, function(section) { return section.id === parentSectionId; });
      if(parentSection) {
        story['parent-section'] = parentSection;
      }
      return storyResponse.getRelatedStories(client)
    })
    .then(relatedStories => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      return{
        story: story,
        relatedStories,
        navigationMenu: structuredMenu,
        cacheKeys: cacheKeys.concat(relatedStories.map(story => story.cacheKeys(config["publisher-id"])[0]))
      };
    });
}

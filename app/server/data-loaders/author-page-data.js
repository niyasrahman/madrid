import _ from "lodash";

import { Author, Story } from "@quintype/framework/server/api-client";
import {storyToCacheKey} from "@quintype/framework/server/caching";
import {getNavigationMenuArray} from "./menu-data";

export function loadAuthorPageData(client, authorId, config) {
  let params = { 'author-id': authorId }
  let authorData = {};
  return Author.getAuthor(client, authorId)
    .then(authorResponse => {
      authorData = authorResponse.author;
      return Story.getSearch(client, params)
    })
    .then(storyResponse => {
      const menu = config.layout.menu;
      const navigationMenu = getNavigationMenuArray(menu);
      return {
        author: authorData,
        stories: storyResponse.stories,
        navigationMenu: navigationMenu
      }
    });
}

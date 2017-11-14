const _ = require('lodash');

const {Story} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");


exports.loadStoryPageData = function loadStoryPageData(client, params, config){
  var cacheKeys = [];
  let story = {};
  return Story.getStoryBySlug(client, params.storySlug)
    .then(storyResponse => {
      cacheKeys = storyResponse.cacheKeys(config["publisher-id"])
      story = storyResponse.asJson();
      const menuObject = _.find(config.layout.menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
      story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
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

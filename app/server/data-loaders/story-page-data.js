const {Story, client} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");


exports.loadStoryPageData = function loadStoryPageData(params, config){
  let stories = {};
  return Story.getStoryBySlug(client, params.storySlug)
    .then(story => {
      stories = story.asJson();
      return getRelatedStory(story);
    })
    .then(relatedStories => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      return{'story': stories,
              relatedStories,
              'navigationMenu': structuredMenu
            };
    });
}

function getRelatedStory(story) {
  return client.getRelatedStories(story)
    .then( relatedStories => {
      return (relatedStories)
    })
}

const {Story, client} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");


exports.loadStoryPageData = function loadStoryPageData(params, config){
  let story = {};
  return Story.getStoryBySlug(client, params.storySlug)
    .then(storyResponse => {
      story = storyResponse.asJson();
      const menuObject = _.find(config.layout.menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
      story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
      return getRelatedStory(storyResponse);
    })
    .then(relatedStories => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      return{'story': story,
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

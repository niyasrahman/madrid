const {Story, client} = require("quintype-toddy-libs/server/api-client");

exports.loadStoryPageData = function loadStoryPageData(params){
  let stories = {};
  return Story.getStoryBySlug(client, params.storySlug)
    .then(story => {
      stories = story.asJson();
      return getRelatedStory(story);
    })
    .then(relatedStories => {
      return{'story': stories,
              relatedStories
            };
    });
}

function getRelatedStory(story) {
  return client.getRelatedStories(story)
    .then( relatedStories => {
      return (relatedStories)
    })
}

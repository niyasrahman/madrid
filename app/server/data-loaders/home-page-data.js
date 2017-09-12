const {Story, client} = require("quintype-toddy-libs/server/api-client");

exports.loadHomePageData = function loadHomePageData(){
  return client.getCollectionBySlug('home', {})
    .then(collection => {
      return {
        collections: collection.items
      }
    });
}

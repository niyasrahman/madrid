_ = require("lodash");
const {Story, client} = require("quintype-toddy-libs/server/api-client");

exports.loadHomePageData = function loadHomePageData() {
  let placeholderCollectionSlugs = [];
  return client.getCollectionBySlug('home', {})
    .then(homeCollection => {
      placeholderCollectionSlugs = childCollectionSlugsFromCollection(homeCollection);
      return makeBulkRequest(placeholderCollectionSlugs);
    })
    .then(allCollections => {
      return {'homeCollections': _.sortBy(allCollections.results, allCollections.parentCollection)};
    });
}

function childCollectionSlugsFromCollection(collection) {
  return _(collection.items)
    .filter(item => item.type === 'collection')
    .map(item => item.slug)
    .value();
}

function createCollectionBulkRequest(slugs) {
  return _.reduce(slugs, function(acc, slug) {
    acc[slug] = {"_type": "collection", "slug": slug, "limit": "8"}
    return acc
  }, {});
}

function makeBulkRequest(slugs) {
  var requestPayload = createCollectionBulkRequest(_.flatten(slugs));
  return client.getInBulk({requests: requestPayload})
  .then(bulkResponse => {
    return {'results': bulkResponse.results};
  })
}

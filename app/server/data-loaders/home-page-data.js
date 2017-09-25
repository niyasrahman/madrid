_ = require("lodash");
const {client} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");

exports.loadHomePageData = function loadHomePageData(config) {
  let placeholderCollectionSlugs = [];
  return client.getCollectionBySlug('home', {})
    .then(homeCollection => {
      placeholderCollectionSlugs = childCollectionSlugsFromCollection(homeCollection);
      return makeBulkRequest(placeholderCollectionSlugs);
    })
    .then(allCollections => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      allCollections.processedResults = addParentSlugInStorySlugs(allCollections.results, config);
      const structuredCollections = allCollections.placeholderCollectionSlugs.map((collectionSlug) => {
      	return allCollections.processedResults[collectionSlug];
      })
      return {'homeCollections': structuredCollections,
              'navigationMenu': structuredMenu
             };
    });
}

function addParentSlugInStorySlugs(data, config) {
  _(data).forEach((collection)=>{
    collection.items.forEach(({story})=>{
      let parentCollectionId = story.sections[0]['parent-id'];
      let parentCollection = _.find(config.sections, function(collection) { return collection.id === parentCollectionId; });
      if(parentCollection) {
        story.generatedSlug = parentCollection.slug + '/' + story.slug;
        story.parentCollection = parentCollection;
      }
    })
  })
  return data;
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
    return {'results': bulkResponse.results, placeholderCollectionSlugs: slugs};
  })
}

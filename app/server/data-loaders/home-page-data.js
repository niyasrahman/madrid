const _ = require("lodash");
// TODO: menu should be a common Component. now accessing this from every pages. (home, story etc)
const {getNavigationMenuArray} = require("./menu-data");

exports.loadHomePageData = function loadHomePageData(client, config) {
  let placeholderCollectionSlugs = [];
  return client.getCollectionBySlug('home', {'item-type': 'collection'})
    .then(homeCollection => {
      placeholderCollectionSlugs = childCollectionSlugsFromCollection(homeCollection);
      return makeBulkRequest(client, placeholderCollectionSlugs);
    })
    .then(allCollections => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      allCollections.processedResults = addParentSlugInStorySlugs(allCollections.results, config, config.layout.menu);
      const structuredCollections = allCollections.placeholderCollectionSlugs.map((collectionSlug) => {
      	return allCollections.processedResults[collectionSlug];
      })
      return {'homeCollections': structuredCollections,
              'navigationMenu': structuredMenu
             };
    });
}

function addParentSlugInStorySlugs(data, config, menu) {
  _(data).forEach((collection)=>{
    const collectionMenuObject = _.find(menu, function(menuCollectionItem) { return menuCollectionItem['section-slug'] === collection.slug; });
    // Setting the collection color which can be changed from platform settings. Fallback to one color if no
    // menu color is set.
    collection.color = collectionMenuObject ? collectionMenuObject.data.color : '#6093f2';
    collection.items.forEach(({story})=>{
      const parentCollectionId = story.sections[0]['parent-id'];
      const parentCollection = _.find(config.sections, function(collection) { return collection.id === parentCollectionId; });
      if(parentCollection) {
        story['generated-slug'] = parentCollection.slug + '/' + story.slug;
        story['parent-collection'] = parentCollection;
      }
      const menuObject = _.find(menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
      story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
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
    acc[slug] = {"_type": "collection", "slug": slug, "limit": "8", "item-type": "story"}
    return acc
  }, {});
}

function makeBulkRequest(client, slugs) {
  var requestPayload = createCollectionBulkRequest(_.flatten(slugs));
  return client.getInBulk({requests: requestPayload})
  .then(bulkResponse => {
    return {'results': bulkResponse.results, placeholderCollectionSlugs: slugs};
  })
}

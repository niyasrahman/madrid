import _ from "lodash";
// TODO: menu should be a common Component. now accessing this from every pages. (home, story etc)
import {getNavigationMenuArray} from "./menu-data";
import {Collection} from "@quintype/framework/server/api-client";

function concatAll(initial, arrays) {
  return arrays.reduce((l, a) => l.concat(a), initial);
}

export function loadHomePageData(client, config) {
  let placeholderCollectionSlugs, childCollectionsAssociatedMetadata, homeCollection;

  return Collection.getCollectionBySlug(client, 'home', {'item-type': 'collection'})
    .then(result => {
      homeCollection = result;

      const childCollectionProperties = getChildCollectionProperties(homeCollection);
      placeholderCollectionSlugs = childCollectionProperties.childrenSlugs; //To create bulk request and to retain home order.
      childCollectionsAssociatedMetadata = childCollectionProperties.associatedMetadata; //To selected home page layout for each child collection.

      return makeBulkRequest(client, placeholderCollectionSlugs);
    })
    .then(allCollections => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      allCollections = setExtraProperties(allCollections, config.layout.menu, childCollectionsAssociatedMetadata);//Mutate all the collections and stories within to have associated colors.

      const orderedCollectionBulk = placeholderCollectionSlugs.map((collectionSlug) => {
      	return allCollections[collectionSlug];
      });

      return {
        orderedCollectionBulk: orderedCollectionBulk,
        navigationMenu: structuredMenu,
        cacheKeys: concatAll(
          homeCollection.cacheKeys(config["publisher-id"]),
          Object.values(orderedCollectionBulk)
                .map(collection => Collection.build(collection).cacheKeys(config["publisher-id"])
                .slice(0, 5))
        )
      };
    });
}

function setExtraProperties(data, menu, childCollectionsAssociatedMetadata) {
  _(data).forEach((collection)=>{
    const collectionSectionObject = _.find(menu, function(menuItem) {
      return menuItem['section-slug'] == collection.slug
    });
    if(collectionSectionObject && collectionSectionObject['parent-id']) {
       const parentSectionObject = _.find(menu, function(menuItem) { return menuItem.id ==collectionSectionObject['parent-id'] });
       collection['slug-with-parent'] = parentSectionObject['section-slug'] + '/' + collection.slug;
    }
    const collectionMenuObject = _.find(menu, function(menuCollectionItem) { return menuCollectionItem['section-slug'] === collection.slug; });
    collection.color = collectionMenuObject ? collectionMenuObject.data.color : '#6093f2';
    collection['associated-metadata'] = childCollectionsAssociatedMetadata ? childCollectionsAssociatedMetadata[collection.slug] : [];
    collection.items.forEach(({story})=>{
      const menuObject = _.find(menu, function(menuItem) { return story && story.sections[0] && menuItem['section-slug'] === story.sections[0].slug; });
      story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
    })
  });

  return data;
}


function getChildCollectionProperties(collection) {
  var associatedMetadata = [];
  var childrenSlugs = [];
  _.forEach(collection.items, function(item) {
    if (item.type === 'collection') {
      associatedMetadata[item.slug] = item['associated-metadata'] || [];
      childrenSlugs.push(item.slug);
    }
  });

  return {childrenSlugs, associatedMetadata}
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
    return bulkResponse.results;
  })
}

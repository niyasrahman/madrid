const {Story, client} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");

exports.loadSectionPageData = function loadSectionPageData(sectionId, config) {
  const section = _.find(config.sections, function(section) { return section.id === sectionId; });
  const sectionSlug = section.collection ? section.collection.slug : null;

  return client.getCollectionBySlug(sectionSlug)
    .then(collection => {
      const menu = config.layout.menu;
      const structuredMenu = getNavigationMenuArray(menu);
      const collectionMenuObject = _.find(menu, function(menuCollectionItem) { return menuCollectionItem['section-slug'] === collection.slug; });
      // Setting the collection color which can be changed from platform settings. Fallback to one color if no
      // menu color is set.
      collection.color = collectionMenuObject ? collectionMenuObject.data.color : '#6093f2';
      collection.items
        .filter((item) => item.type === 'story')
        .forEach(({story})=>{
        const parentCollectionId = story.sections[0]['parent-id'];
        const parentCollection = _.find(config.sections, function(collection) { return collection.id === parentCollectionId; });
        if(parentCollection) {
          story['generated-slug'] = parentCollection.slug + '/' + story.slug;
          story['parent-collection'] = parentCollection;
        }
        const menuObject = _.find(menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
        story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
      })
      return {
        section: config["sections"].find(section => section.id == sectionId),
        collection: collection.items,
        navigationMenu: structuredMenu
      }
    });
}

const {Story, client} = require("quintype-toddy-libs/server/api-client");
const {getNavigationMenuArray} = require("./menu-data");

exports.loadSectionPageData = function loadSectionPageData(sectionId, config) {
  return Story.getStories(client, 'top', {'section-id': sectionId, 'limit': '20'})
    .then(stories => {
      const structuredMenu = getNavigationMenuArray(config.layout.menu);
      return {
        section: config["sections"].find(section => section.id == sectionId),
        stories: stories.map(story => story.asJson()),
        navigationMenu: structuredMenu
      }
    });
}

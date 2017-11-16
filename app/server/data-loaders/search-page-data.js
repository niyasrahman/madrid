const _ = require("lodash");

const {Story} = require("quintype-toddy-libs/server/api-client");
const {storyToCacheKey} = require("quintype-toddy-libs/server/caching");
const {getNavigationMenuArray} = require("./menu-data");

exports.loadSearchPageData = function loadSearchPageData(client, query, config) {
  return Story.getSearch(client, {'q': query, 'limit': '20'})
    .then(result => {
      const menu = config.layout.menu;
      const navigationMenu = getNavigationMenuArray(menu);
      return {
        stories: getProcessedStories(result.stories, menu, config.sections),
        total: result.total,
        navigationMenu: navigationMenu,
        cacheKeys: result.stories.map(story => storyToCacheKey(config["publisher-id"], story)),
        query: query
      }
    });
}

function getProcessedStories(stories, menu, sections) {
  const processedStories = [];
  // TODO: Optimize
  stories.forEach(story => {
    story = story.story;
    const parentSectionId = story.sections[0]['parent-id'];
    const parentSection = _.find(sections, function(section) { return section.id === parentSectionId; });
    if(parentSection) {
      story['generated-slug'] = parentSection.slug + '/' + story.slug;
      story['parent-collection'] = parentSection;
    }
    const menuObject = _.find(menu, function(menuItem) { return menuItem['section-slug'] === story.sections[0].slug; });
    story['section-color'] = menuObject ? menuObject.data.color : '#6093f2';
    processedStories.push(story);
  })
  return processedStories;
}

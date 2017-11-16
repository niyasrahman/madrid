const _ = require("lodash");

const {Story} = require("quintype-toddy-libs/server/api-client");
const {storyToCacheKey} = require("quintype-toddy-libs/server/caching");
const {getNavigationMenuArray} = require("./menu-data");

exports.loadTagPageData = function loadTagPageData(client, tagSlug, config) {
  return Story.getStories(client, 'top', {'tag': tagSlug, 'limit': '20'})
    .then(stories => {
      const menu = config.layout.menu;
      const structuredMenu = getNavigationMenuArray(menu);
      return {
        tag: tagSlug,
        stories: getProcessedStories(stories, config.layout.menu, config.sections),
        navigationMenu: structuredMenu,
        cacheKeys: stories.map(story => storyToCacheKey(config["publisher-id"], story))
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

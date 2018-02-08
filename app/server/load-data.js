import _ from "lodash";

import {loadHomePageData} from "./data-loaders/home-page-data";
import {loadStoryPageData} from "./data-loaders/story-page-data";
import {loadStoryPublicPreviewPageData} from "./data-loaders/story-public-preview-page-data";
import {loadSectionPageData} from "./data-loaders/section-page-data";
import {loadTagPageData} from "./data-loaders/tag-page-data";
import {loadSearchPageData} from "./data-loaders/search-page-data";
import {loadStaticPageData} from "./data-loaders/static-page-data";
import {loadErrorPageData} from "./data-loaders/error-page-data";
import {PAGE_TYPE, WHITELIST_CONFIG_KEYS} from "./constants";
import publisher from "@quintype/framework/server/publisher-config";

function loadErrorData(error, config) {
  return loadErrorPageData(error, config);
}

function loadData(pageType, params, config, client) {
  function _loadData() {
    switch (pageType) {
      case PAGE_TYPE.HOME_PAGE: return loadHomePageData(client, config);
      case PAGE_TYPE.SECTION_PAGE: return loadSectionPageData(client, params.sectionId, config);
      case PAGE_TYPE.TAG_PAGE: return loadTagPageData(client, params.tagSlug, config);
      case PAGE_TYPE.SEARCH_PAGE: return loadSearchPageData(client, params.q, config);
      case PAGE_TYPE.STORY_PAGE: return loadStoryPageData(client, params, config);
      case PAGE_TYPE.STORY_PUBLIC_PREVIEW_PAGE: return loadStoryPublicPreviewPageData(client, params, config);
      case PAGE_TYPE.STATIC_PAGE: return loadStaticPageData(config);
      case PAGE_TYPE.HOME_PREVIEW: return loadHomePageData(client, config);
      default: return Promise.resolve({stories: [{headline: "Foobar"}]})
    }
  }

  return _loadData()
    .then((data) => {
      return {
        httpStatusCode : 200,
        pageType: data.pageType || pageType,
        data: data,
        config: Object.assign(_.pick(config.asJson(), WHITELIST_CONFIG_KEYS),{ 'publisher-theme': publisher.publisher_theme[config['publisher-name']]})
      };
    });
}

export { loadData, loadErrorData };

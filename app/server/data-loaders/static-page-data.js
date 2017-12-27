import {getNavigationMenuArray} from "./menu-data";

export function loadStaticPageData(config) {
  return Promise.resolve({
      navigationMenu: getNavigationMenuArray(config.layout.menu),
      cacheKeys: ["static"]
    });
}

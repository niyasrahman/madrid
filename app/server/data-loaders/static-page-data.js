import { getNavigationMenuArray } from "./menu-data";
import staticPageHTML from "../../../config/static-page-html";

export function loadStaticPageData(config) {
  return Promise.resolve({
    navigationMenu: getNavigationMenuArray(config.layout.menu),
    cacheKeys: ["static"],
    staticPageHTML: staticPageHTML(),
  });
}

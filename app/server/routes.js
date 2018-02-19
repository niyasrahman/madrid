import { generateStoryPageRoutes, generateSectionPageRoutes } from "@quintype/framework/server/generate-routes";

import { PAGE_TYPE } from "./constants";

// Static Routes are not part of the PWA. Also, they aren't part of the JS bundle
export const STATIC_ROUTES = [
  { path: "/about-us", pageType: PAGE_TYPE.STATIC_PAGE, renderParams: { contentTemplate: "./about-us" } },
  { path: "/terms-and-conditions", pageType: PAGE_TYPE.STATIC_PAGE, renderParams: { contentTemplate: "./terms-and-conditions" } },
  { path: "/privacy-policy", pageType: PAGE_TYPE.STATIC_PAGE, renderParams: { contentTemplate: "./privacy-policy" } },
  { path: "/preview/story", pageType: PAGE_TYPE.STORY_PREVIEW, exact: true, renderParams: { contentTemplate: "./story-preview" }, disableIsomorphicComponent: false },
  { path: "/preview/home", pageType: PAGE_TYPE.HOME_PREVIEW, exact: true, renderParams: { contentTemplate: "./story-preview" }, disableIsomorphicComponent: false },
];

const ISOMORPHIC_ROUTES = [
  { path: "/", pageType: "home-page", exact: true },
  { path: "/preview/story/:encryptedKey", pageType: "story-public-preview-page", exact: true },
  { path: "/topic/:tagSlug", pageType: "tag-page", exact: true, skipPWA: true },
  { path: "/author/:authorId", pageType: "author-page", exact: true, skipPWA: true },
  { path: "/search", pageType: "search-page", exact: true, skipPWA: true },
];

export function generateRoutes(config) {
  return ISOMORPHIC_ROUTES.concat(generateSectionPageRoutes(config), generateStoryPageRoutes(config, { withoutParentSection: true }));
}

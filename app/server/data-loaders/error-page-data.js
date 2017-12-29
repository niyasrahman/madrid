import _ from "lodash";

import {getNavigationMenuArray} from "./menu-data";
import {WHITELIST_CONFIG_KEYS} from "../constants";

export function loadErrorPageData(error, config) {
  const errorComponents = { 404 : "not-found", 500: "not-found" };
  const statusCode = error.httpStatusCode || 500;
  return {
    data: { navigationMenu: getNavigationMenuArray(config.layout.menu) },
    config: _.pick(config, WHITELIST_CONFIG_KEYS),
    pageType: errorComponents[statusCode],
    httpStatusCode: statusCode
  }
}

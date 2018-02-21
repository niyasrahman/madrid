import _ from "lodash";

import {getNavigationMenuArray} from "./menu-data";
import {WHITELIST_CONFIG_KEYS} from "../constants";
import MetypeConfig from "../../../config/metype-config";
import publisher from "@quintype/framework/server/publisher-config";

export function loadErrorPageData(error, config) {
  const errorComponents = { 404 : "not-found", 500: "not-found" };
  const statusCode = error.httpStatusCode || 500;
  return {
    data: { navigationMenu: getNavigationMenuArray(config.layout.menu) },
    config: Object.assign(_.pick(config, WHITELIST_CONFIG_KEYS),
            { 'publisher-theme': publisher.publisher_theme[config['publisher-name']] },
            { 'metype-config': MetypeConfig(config['publisher-name']) }),
    pageType: errorComponents[statusCode],
    httpStatusCode: statusCode
  }
}

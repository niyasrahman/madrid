import _ from "lodash";
import {assetPath, readAsset} from "@quintype/framework/server/asset-helper";
import {renderReduxComponent} from "@quintype/framework/server/render";

import { NavigationComponent } from "../../isomorphic/components/navigation-component.js"
import { Metype } from "../../isomorphic/components/metype.js";
import { Footer } from "../../isomorphic/components/footer.js"
import { Theme } from "../../isomorphic/components/theme.js";
import { GTMIdProvider } from "../../isomorphic/components/gtm_id.js";
import { GAIdProvider } from "../../isomorphic/components/ga_id.js";

const cssContent = assetPath("app.css") ? readAsset("app.css") : "";

function themeParams(config, {primary_color = '#2f73e4'}) {
  return {
    appName: _.get(config, ["publisher-settings", "title"], "Madrid"),
    primaryColor: primary_color,
  };
}

export function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    contentTemplate: null,
    cssContent: cssContent,
    navbar: renderReduxComponent(NavigationComponent, params.store),
    meType: renderReduxComponent(Metype, params.store),
    footer: renderReduxComponent(Footer, params.store),
    title: _.get(params.config, ["publisher-settings", "title"], "Madrid"),
    gtmID: renderReduxComponent(GTMIdProvider, params.store),
    googleAnalyticsID: renderReduxComponent(GAIdProvider, params.store),
    themeCSS: renderReduxComponent(Theme, params.store),
    metaTags: params.seoTags ? params.seoTags.toString() : "",
    disableAjaxNavigation: false,
  }, themeParams(params.config, params.store.getState().qt.config["theme-attributes"] || {}), params))
}

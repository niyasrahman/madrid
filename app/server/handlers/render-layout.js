import _ from "lodash";
import {assetPath, readAsset} from "@quintype/framework/server/asset-helper";
import {renderReduxComponent} from "@quintype/framework/server/render";

import { NavigationComponent } from "../../isomorphic/components/navigation-component.js"
import { Footer } from "../../isomorphic/components/footer.js"
import { Theme } from "../../isomorphic/components/theme.js";

const cssContent = assetPath("app.css") ? readAsset("app.css") : "";

export function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    contentTemplate: null,
    cssContent: cssContent,
    navbar: renderReduxComponent(NavigationComponent, params.store),
    footer: renderReduxComponent(Footer, params.store),
    title: "Madrid",
    themeCSS: renderReduxComponent(Theme, params.store),
    metaTags: params.seoTags ? params.seoTags.toString() : "",
    disableAjaxNavigation: false,
  }, params))
}

import _ from "lodash";
import {assetPath} from "@quintype/framework/server/asset-helper";
import {renderReduxComponent} from "@quintype/framework/server/render";

import { NavigationComponent } from "../../isomorphic/components/navigation-component.js"
import { Footer } from "../../isomorphic/components/layout/footer.js"

export function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    navbar: renderReduxComponent(NavigationComponent, params.store),
    footer: renderReduxComponent(Footer, params.store),
    title: "Madrid",
    metaTags: params.seoTags ? params.seoTags.toString() : "",
  }, params))
}

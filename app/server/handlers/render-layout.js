const _ = require("lodash");
const {assetPath} = require("@quintype/framework/server/asset-helper");
const {renderReduxComponent} = require("@quintype/framework/server/render");

const { NavigationComponent } = require("../../isomorphic/components/navigation-component.js")
const { Footer } = require("../../isomorphic/components/layout/footer.js")

exports.renderLayout = function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    navbar: renderReduxComponent(NavigationComponent, params.store),
    footer: renderReduxComponent(Footer, params.store),
    title: "Madrid",
    metadata : []
  }, params))
}

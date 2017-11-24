const _ = require("lodash");
const {assetPath} = require("quintype-toddy-libs/server/asset-helper");
const {renderReduxComponent} = require("quintype-toddy-libs/server/render");

const { NavigationComponent } = require("../../isomorphic/components/navigation-component.jsx")

exports.renderLayout = function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    navbar: renderReduxComponent(NavigationComponent, params.store),
    title: "Madrid",
    metadata : []
  }, params))
}

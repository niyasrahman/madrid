const _ = require("lodash");
const {assetPath} = require("quintype-toddy-libs/server/asset-helper");

exports.renderLayout = function renderLayout(res, params){
  res.render("pages/layout", _.extend({
    assetPath: assetPath,
    content: "",
    title: "Madrid",
    metadata : []
  }, params))
}



exports.getNavigationMenuArray = function(menuList) {
  _(menuList).forEach(f=> {
    let parentObj = _.find(menuList, function(g) { return g.id == f['parent-id'] });
    f.children = _(menuList).filter(g=>g['parent-id']==f.id).value();
    f['parent-slug'] = parentObj ? parentObj['section-slug'] : null;
  });
  return _(menuList).filter(f=>f['parent-id']==null).value();
}

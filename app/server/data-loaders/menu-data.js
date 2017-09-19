

exports.getNavigationMenuArray = function(menuList) {
  _(menuList).forEach(f=> {
         f.children = _(menuList).filter(g=>g['parent-id']==f.id).value();
  });
  return _(menuList).filter(f=>f['parent-id']==null).value();
}

import _ from 'lodash';

export function addTargetBlankToExtLinks(el) {
  var anchors = el.getElementsByTagName('a');
  _.forEach(anchors, function(anchor) {
    if (anchor.hostname && anchor.hostname != window.location.hostname) {
      anchor.setAttribute('target', '_blank');
    }
  })
}

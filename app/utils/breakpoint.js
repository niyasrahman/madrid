import _ from "lodash";

const breakPoints = {
  'tablet': 768,
  'pc': 992
};

function breakpoint(device) {
  return _.get(breakPoints,device) ? (_.get(global, 'document.documentElement.clientWidth') > _.get(breakPoints,device)) : false;
}

export { breakpoint };

import { createDfpAdComponent } from '@quintype/components';

export const AD_CONFIG = {
  "Demo-Ad": { adUnit: "QTDemo_AD", sizes: [[300, 250], [320, 50]] }
}

export const DfpAd = createDfpAdComponent({
  defaultNetworkID: "60988533",
  config: AD_CONFIG,
  targeting: function(state) {
    const params = {};
    return params;
  }
});

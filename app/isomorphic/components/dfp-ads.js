import { createDfpAdComponent } from '@quintype/components';

export const AD_CONFIG = {
  "Horizontal-Ad": { adUnit: "Madrid_Horizontal_Responsive", sizes: [[728, 90], [320, 50]] },
  "Mrec": { adUnit: "Madrid_Mrec", sizes: [[300,250]] },
  "Vertical-Ad": { adUnit: "Madrid_Vertical_Responsive", sizes: [[300, 600], [300, 250]] },
  "Story-Mrec": { adUnit: "Madrid_Story_Mrec", sizes: [[300,250]] },
  "Story-Middle-Ad": { adUnit: "Madrid_Story_Middle_Responsive", sizes: [[728, 90], [320, 50]] },
  "Story-Bottom-Ad": { adUnit: "Madrid_Story_Bottom_Responsive", sizes: [[728, 90], [320, 50]] }
}

export const DfpAd = createDfpAdComponent({
  defaultNetworkID: "60988533",
  config: AD_CONFIG,
  targeting: function(state) {
    const params = {};
    return params;
  }
});

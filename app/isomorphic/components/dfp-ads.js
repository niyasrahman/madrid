import _ from "lodash";
import React from "react";
import {connect} from "react-redux";
import { createDfpAdComponent } from '@quintype/components';

const viewPortSizeMappingHorizontal_728to320 = [ {viewport: [980, 90], sizes:[[728, 90]]},
                              {viewport: [320, 0], sizes:[[320, 50]]},
                              {viewport: [0, 0], sizes:[[320, 50]]}]
const viewPortSizeMappingVertical_600to250 = [ {viewport: [980, 90], sizes:[[300, 600]]},
                              {viewport: [320, 0], sizes:[[300, 250]]},
                              {viewport: [0, 0], sizes:[[300, 250]]}]
export const AD_CONFIG = {
  "Horizontal-Ad": { adUnit: "Madrid_Horizontal_Responsive", sizes: [[728, 90], [320, 50]],
    viewPortSizeMapping: viewPortSizeMappingHorizontal_728to320
  },
  "Mrec": { adUnit: "Madrid_Mrec", sizes: [[300,250]] },
  "Vertical-Ad": { adUnit: "Madrid_Vertical_Responsive", sizes: [[300, 600], [300, 250]],
    viewPortSizeMapping: viewPortSizeMappingVertical_600to250
  },
  "Story-Mrec": { adUnit: "Madrid_Story_Mrec", sizes: [[300,250]] },
  "Story-Middle-Ad": { adUnit: "Madrid_Story_Middle_Responsive", sizes: [[728, 90], [320, 50]],
    viewPortSizeMapping: viewPortSizeMappingHorizontal_728to320
  },
  "Story-Bottom-Ad": { adUnit: "Madrid_Story_Bottom_Responsive", sizes: [[728, 90], [320, 50]],
    viewPortSizeMapping: viewPortSizeMappingHorizontal_728to320
  }
}

function DfpAdBase(props) {
  if(props.disableAds) {
    return null;
  }
  const networkId = _.get(props, ['publisherTheme','dfp_network_id'], "60988533");
  const DfpAdWrapper = createDfpAdComponent({
    defaultNetworkID: networkId,
    config: AD_CONFIG,
    targeting: function(state) {
      // Params that can be derived from state.
      const params = {
        pageType: _.get(state, ['qt', 'pageType']),
        publisherName: _.get(state, ['qt', 'config', 'publisher-name']),
        publisherId: _.get(state, ['qt', 'config', 'publisher-id']),
        environment: _.get(state, ['qt', 'config', 'env'])
      };
      const sectionName = _.get(state, ['qt', 'data', 'section', 'name']);
      if(sectionName) params['sectionName'] = sectionName;
      const storyId = _.get(state, ['qt', 'data', 'story', 'id']);
      if(storyId) params['storyId'] = storyId;
      const sponsoredBy = _.get(state, ['qt', 'data', 'story', 'metadata','sponsored-by']);
      if(sponsoredBy) params['sponsoredBy'] = sponsoredBy;

      // Params that can't be derived from state, thus using props to pass it on.
      const layoutName = _.get(props, 'layoutName');
      if(layoutName) params['layoutName'] = layoutName;
      const collectionSlug = _.get(props, 'collectionSlug');
      if(collectionSlug) params['collectionSlug'] = collectionSlug;
      return params;
    }
  });
  return <DfpAdWrapper {...props}/>
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {},
    disableAds: state.qt.config['disable-ads']
  }
}

export const DfpAd = connect(mapStateToProps, () => ({}))(DfpAdBase);

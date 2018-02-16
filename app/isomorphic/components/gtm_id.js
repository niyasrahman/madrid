import React from 'react';
import {connect} from "react-redux";

function GTMIdProviderBase(props) {
  // Only return a GTM id if the env is production for removing false impressions.
  // We will show the GTM code only if an ID is present
  return props.env === 'production' && props.publisherTheme && props.publisherTheme.gtm_id;
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {},
    env: state.qt.config['env'] || 'dev',
  }
}

export const GTMIdProvider = connect(mapStateToProps, () => ({}))(GTMIdProviderBase);

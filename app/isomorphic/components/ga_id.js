import React from 'react';
import {connect} from "react-redux";

function GAIdProviderBase(props) {
  // Only return a Google id if the env is production for removing false impressions.
  // We will show the Google code only if an ID is present
  return props.env === 'production' && props.publisherTheme && props.publisherTheme.google_analytics_id;
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {},
    env: state.qt.config['env'] || 'dev',
  }
}

export const GAIdProvider = connect(mapStateToProps, () => ({}))(GAIdProviderBase);

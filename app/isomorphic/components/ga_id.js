import React from 'react';
import {connect} from "react-redux";

function GAIdProviderBase(props) {
  // We will show the Analytics code only if an ID is present
  return props.publisherTheme && props.publisherTheme.google_analytics_id ? props.publisherTheme.google_analytics_id : null;
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {}
  }
}

export const GAIdProvider = connect(mapStateToProps, () => ({}))(GAIdProviderBase);

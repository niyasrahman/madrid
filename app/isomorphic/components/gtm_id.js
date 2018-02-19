import React from 'react';
import {connect} from "react-redux";

function GTMIdProviderBase(props) {
  // We will show the GTM code, only if an ID is present
  return props.publisherTheme && props.publisherTheme.gtm_id ? props.publisherTheme.gtm_id : null;
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {}
  }
}

export const GTMIdProvider = connect(mapStateToProps, () => ({}))(GTMIdProviderBase);

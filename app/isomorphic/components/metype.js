import React from "react";
import { connect } from 'react-redux';
import { MetypeFeedWidget } from "@metype/components";

function MetypeBase(props) {
  const metypeConfig = props.config['metype-config'];
  return <MetypeFeedWidget
          host={metypeConfig.host}
          accountId={metypeConfig.accountId}
          publisher={props.config['publisher-name']}
          primaryColor={metypeConfig.primaryColor}
          className={metypeConfig.className || ''}
          secondaryColor={metypeConfig.bgColor}
          fontColor={metypeConfig.fontColor}
        />;
}

function mapStateToProps(state) {
  return {
    config: state.qt.config || {},
  };
}

const Metype = connect(mapStateToProps, {})(MetypeBase);

export { Metype }

import React from "react";

class MetypeWidget extends React.Component {

  constructor(props) {
    super(props);
    this.global = false;
  }

  componentDidMount() {
    this.global = window;
    if (window.talktype && this.metypeWidget) {
      window.talktype.commentWidgetIframe(this.metypeWidget);
    }
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor, fontColor, pageURL} = this.props;

    return <div id="metype-container"
                ref={(el) => this.metypeWidget = el }
                className={`iframe-container ${className || ''}`}
                data-metype-account-id={accountId || 2}
                data-metype-host={host || 'http://metype.staging.quintype.com'}
                data-metype-primary-color={primaryColor}
                data-metype-bg-color={secondaryColor}
                data-metype-font-color={fontColor}
                data-metype-window-width={this.global ? window.screen.width : 700}
                data-metype-window-height={this.global ? window.screen.height : 700}
                data-metype-page-url={pageURL || `http://metype.staging.quintype.com/`} />
  }
}

export {MetypeWidget};
import React from "react";

class MetypeWidget extends React.Component {

  constructor(props) {
    super(props);
    this.global = false;
  }

  componentDidMount() {
    this.global = window;
    if (window.talktype && this.metypeWidget) {
      this.metypeWidget.setAttribute('data-metype-page-url', window.location.href);
      window.talktype.commentWidgetIframe(this.metypeWidget);
    }
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor, fontColor, pageURL} = this.props;

    return <div id="metype-container"
                ref={(el) => this.metypeWidget = el }
                className={`iframe-container ${className || ''}`}
                data-metype-account-id={accountId || 2}
                data-metype-host={host || 'http://localhost:3000'} //Change fallback to deployed domain name
                data-metype-primary-color={primaryColor || '#4d086a'}
                data-metype-bg-color={secondaryColor || '#fff'}
                data-metype-font-color={fontColor || '#000'}
                data-metype-window-width={this.global ? window.screen.width : 700}
                data-metype-window-height={this.global ? window.screen.height : 700}
                data-metype-page-url={pageURL || `http://metype.staging.quintype.com/`} />
  }
}

export {MetypeWidget};
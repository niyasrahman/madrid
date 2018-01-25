import React from "react";

class MetypeFeedWidget extends React.Component {

  constructor(props) {
    super(props);
    this.global = false;
  }

  componentDidMount() {
    this.global = window;
    if (window.talktype && this.metypeFeedWidget) {
      window.talktype.feedWidgetIframe(this.metypeFeedWidget);
    }
  }

  metypeToggleButton(){
    (this.global && this.global.talktype) && window.talktype.toggleButton();
  }

  metypeSlideToggleButton(){
    (this.global && this.global.talktype) && window.talktype.slideButton();
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor} = this.props;

    return <div id='feed-metype-container'
                ref={(el) => this.metypeFeedWidget = el }
                className='feed-iframe-container'
                data-metype-account-id={accountId || 2}
                data-metype-host={host || 'http://metype.staging.quintype.com'}
                data-metype-publisher={publisher}
                data-metype-primary-color={primaryColor}
                data-metype-secondary-color={secondaryColor} >
      <div id='metype-clickthru' className='metype-clickthru' onClick={() => this.metypeToggleButton()}></div>
      <div className="metype-feed-slide-icon" id="metype-feed-slide-icon" onClick={() => this.metypeToggleButton()}></div>
    </div>
  }
}

export { MetypeFeedWidget };
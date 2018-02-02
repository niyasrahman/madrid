import React from "react";
import {MetypeScripts, scriptLoader} from "./metype-script-loader";

class MetypeFeedWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    !window.talktype && scriptLoader(this.props.host,  () => this.initFeed(this.randomNumber));
  }

  initFeed(randomNumber){
    if (window.talktype) {
      window.talktype.feedWidgetIframe(document.getElementById('feed-metype-container'));
    }
  }

  metypeToggleButton(){
    (global && global.talktype) && window.talktype.toggleButton();
  }

  metypeSlideToggleButton(){
    (global && global.talktype) && window.talktype.slideButton();
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor, fontColor} = this.props;

    return <div id={`feed-metype-container`}
                ref={(el) => this.metypeFeedWidget = el }
                className='feed-iframe-container'
                data-metype-account-id={accountId}
                data-metype-host={host}
                data-metype-publisher={publisher}
                data-metype-primary-color={primaryColor || '#3a9fdd'}
                data-metype-bg-color={secondaryColor || '#fff'}
                data-metype-font-color={fontColor || '#4a4a4a'} >
      <div id='metype-clickthru' className='metype-clickthru' onClick={() => this.metypeToggleButton()}></div>
      <div className="metype-feed-slide-icon" id="metype-feed-slide-icon" onClick={() => this.metypeToggleButton()}></div>
    </div>
  }
}

export { MetypeFeedWidget };
import React from "react";
import {scriptLoader} from "./metype-script-loader";

class MetypeWidget extends React.Component {

  constructor(props) {
    super(props);
    this.randomNumber = new Date().getMilliseconds();
  }

  componentDidMount() {
    !window.talktype && scriptLoader(this.props.host, () => this.initWidget(this.randomNumber));
    this.initWidget(this.randomNumber);
  }

  metypeToggleButton(){
    (!global && window.talktype) && window.talktype.toggleButton();
  }

  metypeSlideToggleButton(){
    (!global && window.talktype) && window.talktype.slideButton();
  }

  initWidget(randomNumber){
    if (window.talktype) {
      console.log(`exex`);
      window.talktype.commentWidgetIframe(document.getElementById(`metype-container-${randomNumber}`));
    }
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor, fontColor, pageURL} = this.props;

    return <div>
      <div id={`metype-container-${this.randomNumber}`}
           ref={(el) => this.metypeWidget = el }
           className={`iframe-container ${className}`}
           data-metype-account-id={accountId}
           data-metype-host={host} //Change fallback to deployed domain name
           data-metype-primary-color={primaryColor || '#4d086a'}
           data-metype-bg-color={secondaryColor || '#fff'}
           data-metype-font-color={fontColor || '#000'}
           data-metype-window-width={!global ? window.screen.width : 700}
           data-metype-window-height={!global ? window.screen.height : 700}
           data-metype-page-url={pageURL}>
      </div>
    </div>
  }
}

export {MetypeWidget};
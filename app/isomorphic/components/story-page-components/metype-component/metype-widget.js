import React from "react";
import {MetypeScripts} from "./metype-script-loader";

class MetypeWidget extends React.Component {

  constructor(props) {
    super(props);
    this.randomNumber = new Date().getMilliseconds();
  }

  componentDidMount() {
    if (window.talktype && this.metypeWidget) {
      window.talktype.commentWidgetIframe(this.metypeWidget);
    }
  }

  metypeToggleButton(){
    (!global && window.talktype) && window.talktype.toggleButton();
  }

  metypeSlideToggleButton(){
    (!global && window.talktype) && window.talktype.slideButton();
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
      <MetypeScripts metypeContainer={`metype-container-${this.randomNumber}`} />
    </div>
  }
}

export {MetypeWidget};
import React from "react";

class MetypeScripts extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    !window.talktype && this.loadScript();
  }

  loadScript() {
    if(document.querySelector('script[data-metype-script="1"]')) return false;
    const metypeScript = document.createElement('script');
    metypeScript.setAttribute("src", 'https://d1y1r594kapmgi.cloudfront.net/quintype-metype/assets/application.js');
    metypeScript.setAttribute("data-metype-script", "1" );
    metypeScript.async = 1;
    metypeScript.onload = () => {
      const feedMetypeContainer = document.getElementById(this.props.metypeContainer);
      feedMetypeContainer.setAttribute('data-metype-page-url', this.props.pageUrl || window.location.href);
      feedMetypeContainer.setAttribute('data-metype-window-height', window.innerHeight);
      feedMetypeContainer.setAttribute('data-metype-screen-width', window.screen.width);
      window.talktype.feedWidgetIframe(feedMetypeContainer);
    };
    document.body.appendChild(metypeScript);
  }
  render(){
    return null
  }
}

export {MetypeScripts};
import React from "react";

class MetypeScripts extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    !window.talktype && this.loadScript();
  }

  loadScript() {
    const metypeScript = document.createElement('script');
    metypeScript.setAttribute("src", 'http://metype.staging.quintype.com/quintype-metype/assets/application.js');
    metypeScript.async = 1;
    metypeScript.setAttribute('data-metype-script-id', 'metype-application-js');
    metypeScript.onload = () => {
      const metypeContainer = document.getElementById('feed-metype-container');
      metypeContainer.setAttribute('data-metype-page-url', this.props.pageUrl || window.location.href);
      metypeContainer.setAttribute('data-metype-window-height', window.innerHeight);
      metypeContainer.setAttribute('data-metype-screen-width', window.screen.width);
      window.talktype.feedWidgetIframe(metypeContainer);
      window.talktype.commentWidgetIframe(metypeContainer);
    };
    document.body.appendChild(metypeScript);
  }
  render(){
    return <div>Scripts loaded</div>
  }
}

export {MetypeScripts};
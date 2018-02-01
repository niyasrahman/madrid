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
    metypeScript.setAttribute("src", `${this.props.host}/quintype-metype/assets/application.js`);
    metypeScript.setAttribute("data-metype-script", "1" );
    metypeScript.async = 1;
    metypeScript.onload = () => this.props.onLoadCallback();
    document.body.appendChild(metypeScript);
  }
  render(){
    return null
  }
}

export {MetypeScripts};
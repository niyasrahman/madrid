import React from "react";

const scriptLoader = (host, callback) =>  {
  const metypeScript = document.createElement('script');
  metypeScript.setAttribute("src", `http://localhost:8081/quintype-metype/assets/application.js`);
  metypeScript.setAttribute("data-metype-script", "1" );
  metypeScript.async = 1;
  metypeScript.onload = () => callback();
  document.body.appendChild(metypeScript);
};

class Login extends React.Component {
  componentDidMount(){
    console.log(this.props)
    if(!window.talktype) {
      scriptLoader(this.props.host, () => {});
    }
  }

  onLogin() {
    console.log("foobar'")
  }

  render() {
    return <div>
      <button type="button" onClick={this.onLogin}>Login</button>
    </div>
  }
}

export { Login };

const scriptLoader = (host, callback) =>  {
  const metypeScript = document.createElement('script');
  metypeScript.setAttribute("src", `${host}/quintype-metype/assets/application.js`);
  metypeScript.setAttribute("data-metype-script", "1" );
  metypeScript.async = 1;
  metypeScript.onload = () => callback();
  document.body.appendChild(metypeScript);
};

export {scriptLoader};
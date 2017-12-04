const {startApp} = require("@quintype/framework/server/start");

const PUBLIC_PATH='/ace/assets/';
const FileName = process.env.NODE_ENV == 'production' ? `${PUBLIC_PATH}[name]-[hash:20].[ext]` : `${PUBLIC_PATH}[name].[ext]`;

startApp(() => {
  require('asset-require-hook')({
    extensions: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'mp4'],
    name: FileName
  });
  return require("./app/server/app.js").app;
})

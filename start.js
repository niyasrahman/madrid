var cluster = require('cluster');
var process = require("process");

const PUBLIC_PATH='/ace/assets/';
const FileName = process.env.NODE_ENV == 'production' ? `${PUBLIC_PATH}[name]-[hash:20].[ext]` : `${PUBLIC_PATH}[name].[ext]`;

if(cluster.isMaster) {
  var os = require('os');
  for (var i = 0; i < 4; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
} else {
  require('node-jsx').install();
  require('asset-require-hook')({
    extensions: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'mp4'],
    name: FileName
  });
  var startApp = require("./app/server/server.js");
  startApp().catch(function(e) {
    var sleep = require("sleep-promise");
    console.error("Worker died - Aborting");
    console.error(e.stack);
    return new Promise((resolve) => resolve(cluster.worker.disconnect()))
      .then(() => sleep(250))
      .then(() => process.exit());
  });
}

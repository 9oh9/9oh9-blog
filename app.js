var ghost = require('ghost'),
  path = require('path');

var app = ghost({
  config: path.join(__dirname, 'config.js')
});

if(require.main === module){

  app.then(function (ghostServer) {
      ghostServer.start();
  });

}
else {

  module.exports = app;

}


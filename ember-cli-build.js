/*jshint node:true*/
/* global require, module */
var EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/chessboardjs/js/chessboard-0.3.0.min.js");
  app.import("vendor/chessboardjs/css/chessboard-0.3.0.min.css");

  return app.toTree();
};

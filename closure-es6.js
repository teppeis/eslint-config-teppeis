"use strict";

var extend = require("extend");

module.exports = extend(true, {},
  require("./lib/base"),
  require("./lib/closure"),
  require("./lib/es6")
);

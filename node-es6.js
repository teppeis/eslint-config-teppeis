"use strict";

var extend = require("extend");

module.exports = extend(true, {},
  require("./lib/base"),
  require("./lib/node"),
  require("./lib/es6"),
  {
    "rules": {
      "node/no-unsupported-features": 0,
    }
  }
);

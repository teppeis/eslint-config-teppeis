"use strict";

var extend = require("extend");

module.exports = extend(true, {},
  require("./node"),
  {
    "rules": {
      "quotes": [2, "double"],
      "quote-props": 0,
      "no-magic-numbers": 0,
    }
  }
);

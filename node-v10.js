"use strict";

module.exports = {
  "extends": [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es2015.js",
    "./lib/es2016.js",
    "./lib/es2017.js",
    "./lib/es2018.js",
  ],
  "globals": {
    "URL": false,
    "URLSearchParams": false,
  },
  "rules": {
    "node/no-unsupported-features": [2, {"version": 10}],
  },
};

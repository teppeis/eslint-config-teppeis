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
    // globals@11.5.0 includes URL and URLSearchParams
    // https://github.com/sindresorhus/globals/commit/0a57eb52ff7a1c92f227d2441349e0441252e8bb
  },
  "rules": {
    "node/no-unsupported-features": [2, {"version": 10}],
  },
};

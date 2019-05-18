"use strict";

const version = ">=12.0.0";

module.exports = {
  extends: [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es2015.js",
    "./lib/es2016.js",
    "./lib/es2017.js",
    "./lib/es2018.js",
    "./lib/es2019.js",
  ],
  rules: {
    "node/no-unsupported-features/es-builtins": [2, { version }],
    "node/no-unsupported-features/es-syntax": [2, { version }],
    "node/no-unsupported-features/node-builtins": [2, { version }],
  },
};

"use strict";

const version = ">=14.0.0 <15";

module.exports = {
  extends: [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es2015.js",
    "./lib/es2016.js",
    "./lib/es2017.js",
    "./lib/es2018.js",
    "./lib/es2019.js",
    "./lib/es2020.js",
  ],
  rules: {
    // eslint-node-plugin has not been updated for Node v14
    "node/no-unsupported-features/es-builtins": [0, { version }],
    "node/no-unsupported-features/es-syntax": [0, { version }],
    "node/no-unsupported-features/node-builtins": [2, { version }],
  },
};

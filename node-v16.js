"use strict";

// LTS 'Gallium' from v16.13.0
const version = ">=16.13.0 <17";

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
    "./lib/es2021.js",
    "./lib/es2022.js",
  ],
  rules: {
    // eslint-plugin-node has not been updated for Node v16
    "node/no-unsupported-features/es-builtins": [0, { version }],
    "node/no-unsupported-features/es-syntax": [0, { version }],
    "node/no-unsupported-features/node-builtins": [0, { version }],
  },
};

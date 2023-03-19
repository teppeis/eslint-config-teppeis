"use strict";

const version = ">=19";

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
    "./lib/es2023.js",
  ],
  rules: {
    // eslint-plugin-n has not been updated for Node v19
    "n/no-unsupported-features/es-builtins": [0, { version }],
    "n/no-unsupported-features/es-syntax": [0, { version }],
    "n/no-unsupported-features/node-builtins": [0, { version }],
  },
};

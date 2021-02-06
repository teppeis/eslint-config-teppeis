"use strict";

// LTS 'Erbium' from v12.13.0
const version = ">=12.13.0 <13";

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
    "./lib/es2021-numeric-separators.js",
  ],
  rules: {
    // Node v12 doesn't support optional chaining and nullish coalescing (ES2020).
    // But eslint-plugin-node has not been updated since 2020.
    "node/no-unsupported-features/es-builtins": [0, { version }],
    "node/no-unsupported-features/es-syntax": [0, { version }],
    "node/no-unsupported-features/node-builtins": [0, { version }],
  },
};

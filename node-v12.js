"use strict";

// worker_threads is supported in v12.11.0
// module.syncBuiltinESMExports() is supported in v12.12.0
const version = ">=12.12.0 <13";

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
  // Node v12 doesn't support optional chaining and nullish coalescing (ES2020)
  rules: {
    "node/no-unsupported-features/es-builtins": [2, { version }],
    "node/no-unsupported-features/es-syntax": [2, { version }],
    "node/no-unsupported-features/node-builtins": [2, { version }],
  },
};

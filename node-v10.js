"use strict";

// LTS 'Dubnium' from v10.13.0
// fs.promises or dns.promises are supported in v10.17.0.
// "<11" is needed because some feature are backported.
const version = ">=10.17.0 <11";

module.exports = {
  extends: [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es2015.js",
    "./lib/es2016.js",
    "./lib/es2017.js",
    "./lib/es2018.js",
    // NOTE: Not all ES2019 features are supported
    "./lib/es2019.js",
  ],
  parserOptions: {
    // to support BigInt literal
    ecmaVersion: 2020,
  },
  globals: {
    BigInt: "readonly",
  },
  rules: {
    "node/no-unsupported-features/es-builtins": [2, { version }],
    "node/no-unsupported-features/es-syntax": [2, { version }],
    "node/no-unsupported-features/node-builtins": [2, { version }],
  },
};

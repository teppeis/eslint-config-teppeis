"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    BigInt: "readonly",
    globalThis: "readonly",
  },
  rules: {
    "no-unsafe-optional-chaining": 2,
  },
};

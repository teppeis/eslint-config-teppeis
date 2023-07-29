"use strict";

module.exports = {
  extends: ["./es2021-numeric-separators.js"],
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "unicorn/prefer-string-replace-all": 2,
  },
};

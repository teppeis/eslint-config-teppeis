"use strict";

module.exports = {
  env: {
    es2019: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    // Fixable rules
    "unicorn/prefer-string-trim-start-end": 2,
    "unicorn/prefer-optional-catch-binding": 2,
  },
};

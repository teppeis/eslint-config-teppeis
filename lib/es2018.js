"use strict";

module.exports = {
  env: {
    es2018: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "prefer-object-spread": 2,
    "unicorn/no-useless-fallback-in-spread": 2,
    "unicorn/no-useless-spread": 2,
  },
};

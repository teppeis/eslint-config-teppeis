"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {
    WeakRef: "readonly",
    FinalizationRegistry: "readonly",
    AggregateError: "readonly",
  },
  rules: {
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
    ],
  },
};

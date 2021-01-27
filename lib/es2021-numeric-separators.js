"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
    ],
  },
};

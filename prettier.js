"use strict";

module.exports = {
  "extends": [
    "plugin:prettier/recommended",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "printWidth": 100,
      "singleQuote": true,
      "trailingComma": "all",
      "bracketSpacing": false,
    }],
  },
};

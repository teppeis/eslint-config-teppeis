"use strict";

module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017,
    // Specify if ES Modules
    // "sourceType": "module",
  },
  "rules": {
    // ## Best Practices
    "no-return-await": 2,

    // ## Override
    // ES2017 allows trailing comma in functions
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
    }],
  },
};

"use strict";

module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017,
    // Specify if ES Modules
    // "sourceType": "module",
  },
  "globals": {
    "Atomics": false,
    "SharedArrayBuffer": false,
  },
  "rules": {
    // ## Possible Errors
    // This is a useful case of `await`

    "no-await-in-loop": 0,
    // ## Best Practices
    // No use case
    "no-return-await": 2,
    // Experimentally enabled
    // https://github.com/teppeis/eslint-config-teppeis/pull/52
    "require-await": 2,

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

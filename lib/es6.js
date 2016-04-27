"use strict";

module.exports = {
  "env": {
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    // Specify if ES Modules
    // "sourceType": "module",
  },
  "rules": {
    // ## ECMAScript 6
    // These rules are only relevant to ES6 environments.
    "arrow-body-style": 2,
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "generator-star-spacing": [2, "after"],
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-duplicate-imports": 2,
    "no-restricted-imports": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-shorthand": [2, "methods"],
    "prefer-arrow-callback": [2, {"allowNamedFunctions": true}],
    "prefer-const": 0,
    "prefer-reflect": 0,
    // Not yet in Node v5
    "prefer-rest-params": 0,
    // Not yet in Node v4
    "prefer-spread": 0,
    "prefer-template": 2,
    "require-yield": 2,
    "template-curly-spacing": 2,
    "yield-star-spacing": [2, "after"],

    // ## Override
    // Use ES6 const
    "no-magic-numbers": [1, {"ignoreArrayIndexes": true, "enforceConst": true}],
  }
};

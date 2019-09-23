"use strict";

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
    // Specify if ES Modules
    // "sourceType": "module",
  },
  plugins: ["unicorn"],
  rules: {
    // ## ECMAScript 6
    // These rules are only relevant to ES6 environments.
    "arrow-body-style": 2,
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "generator-star-spacing": [2, { named: "after", anonymous: "neither", method: "neither" }],
    "no-async-promise-executor": 2,
    "no-confusing-arrow": [2, { allowParens: true }],
    "no-duplicate-imports": 2,
    "no-misleading-character-class": 2,
    "no-useless-computed-key": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "object-shorthand": [2, "methods"],
    "prefer-arrow-callback": [2, { allowNamedFunctions: true }],
    "prefer-const": 2,
    "prefer-destructuring": [2, { object: true, array: false }],
    "prefer-numeric-literals": 2,
    "prefer-rest-params": 2,
    "prefer-template": 2,
    "require-atomic-updates": 2,
    "rest-spread-spacing": 2,
    "template-curly-spacing": 2,
    "template-tag-spacing": 2,
    "yield-star-spacing": [2, "after"],
    "no-import-assign": 2,

    // # eslint-plugin-unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn/prefer-exponentiation-operator": 2,
    "unicorn/custom-error-definition": 2,
    "unicorn/prefer-starts-ends-with": 2,
  },
};

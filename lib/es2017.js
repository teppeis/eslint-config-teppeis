"use strict";

module.exports = {
  env: {
    es2017: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    // ## Possible Errors
    // this is a useful case of `await`
    // 'no-await-in-loop': 0,

    // ## Best Practices
    // no use case
    "no-return-await": 2,

    // ## Override
    // ES2017 allows trailing comma in "functions"
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],

    // prefer String#includes and Array#includes
    "unicorn/prefer-includes": 2,
  },
};

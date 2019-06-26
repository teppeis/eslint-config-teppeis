"use strict";

module.exports = {
  extends: ["plugin:prettier/recommended", "prettier/@typescript-eslint", "prettier/unicorn"],
  rules: {
    "prettier/prettier": ["error", require("./.prettierrc.json"), { usePrettierrc: false }],
  },
};

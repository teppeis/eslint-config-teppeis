"use strict";

/**
 * @fileoverview Disable globals unavailable in Node ESM
 */

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
const config = {
  rules: {
    "unicorn/prefer-module": 2,
  },
};
module.exports = config;

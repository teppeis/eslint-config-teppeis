"use strict";

/**
 * @fileoverview Disable globals unavailable in ES Modules
 */

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
const config = {
  rules: {
    "no-restricted-properties": [
      2,
      {
        object: "module",
        property: "exports",
        message: "Unavailable in ES Modules.",
      },
    ],
  },
  globals: {
    require: "off",
    exports: "off",
    __dirname: "off",
    __filename: "off",
  },
};
module.exports = config;

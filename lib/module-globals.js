"use strict";

/**
 * @fileoverview Disable globals unavailable in ES Modules
 */

const message = "It's unavailable in ES Modules.";

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
const config = {
  rules: {
    // no-undef is disabled in TS, so use no-restricted-globals instead.
    "no-restricted-globals": [
      2,
      {
        name: "require",
        message,
      },
      {
        name: "exports",
        message,
      },
      {
        name: "__dirname",
        message,
      },
      {
        name: "__filename",
        message,
      },
    ],
    // `module` is available in ESM, but `module.exports` is not.
    "no-restricted-properties": [
      2,
      {
        object: "module",
        property: "exports",
        message,
      },
    ],
  },
  // for no-undef in JS
  globals: {
    require: "off",
    exports: "off",
    __dirname: "off",
    __filename: "off",
  },
};
module.exports = config;

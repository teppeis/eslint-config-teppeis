"use strict";

// TODO: investigate `settings.import/*` and remove this file

/**
 * @fileoverview Additional config for type:module in package.json
 */

// eslint-disable-next-line n/no-missing-require
const TS_EXTENSIONS = require("./lib/ts-extensions");

module.exports = {
  settings: {
    "import/extensions": [".js", ".jsx", ".mjs"],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["./lib/module-js.js"],
      settings: {
        "import/extensions": [".js", ".jsx", ".mjs"],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["./lib/module-globals.js"],
      settings: {
        "import/extensions": [".js", ".jsx", ".mjs", ...TS_EXTENSIONS],
      },
    },
  ],
};

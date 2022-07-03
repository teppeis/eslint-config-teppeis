"use strict";

/**
 * @fileoverview Config for Node.js ES Modules in JS (not TS)
 */

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
module.exports = {
  extends: ["./module-base.js", "./module-globals.js"],
  rules: {
    // ** Static analysis **
    "import/default": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-unresolved": [2, { caseSensitiveStrict: true }],

    // ** Helpful warnings **
    "import/export": 2,
    "import/no-named-as-default": 2,
    // "import/no-named-as-default-member": 2,

    // ** Style guide **
    "import/extensions": [2, "always"],
  },
};

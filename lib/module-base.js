"use strict";

/**
 * @fileoverview Base config for Node.js ES Modules in both JS and TS
 */

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    // for both TypeScript and non-TypeScript rules

    // ** Static analysis **
    "import/no-absolute-path": 2,
    // for monorepo
    "import/no-relative-packages": 2,
    "import/no-self-import": 2,
    "import/no-useless-path-segments": 2,

    // ** Helpful warnings **
    "import/no-deprecated": 2,
    "import/no-mutable-exports": 2,

    // ** Style guide **
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "import/order": [
      2,
      {
        groups: [["builtin", "external"], "internal", "index", "parent", "sibling"],
      },
    ],
  },
};

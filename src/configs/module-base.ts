/**
 * @fileoverview Base config for TS and Node ESM JS
 */
import type { Linter } from "eslint";
import importPlugin from "eslint-plugin-import";

export const moduleBase: Linter.FlatConfig = {
  languageOptions: {
    sourceType: "module",
  },
  plugins: { import: importPlugin },
  rules: {
    // for both TypeScript and non-TypeScript rules

    // ** Helpful warnings **
    "import/no-mutable-exports": 2,

    // ** Static analysis **
    "import/no-absolute-path": 2,
    "import/no-self-import": 2,
    "import/no-useless-path-segments": 2,

    // ** Style guide **
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "import/order": [
      2,
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "index",
          "parent",
          "sibling",
        ],
      },
    ],
  },
};

/**
 * @fileoverview Base config for TS and Node ESM JS
 */
import type { Linter } from "eslint";
import importX from "eslint-plugin-import-x";

export const moduleBase: Linter.Config = {
  languageOptions: {
    sourceType: "module",
  },
  plugins: { "import-x": importX as any },
  rules: {
    // for both TypeScript and non-TypeScript rules

    // ** Helpful warnings **
    "import-x/no-mutable-exports": 2,

    // ** Static analysis **
    "import-x/no-absolute-path": 2,
    "import-x/no-self-import": 2,
    "import-x/no-useless-path-segments": 2,

    // ** Style guide **
    "import-x/first": 2,
    "import-x/newline-after-import": 2,
    "import-x/no-duplicates": 2,
    "import-x/order": [
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

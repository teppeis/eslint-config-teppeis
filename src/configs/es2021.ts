import type { Linter } from "eslint";
import globals from "globals";
import { merge } from "../merge.js";
import { base } from "./base.js";

export const es2021: Linter.FlatConfig = merge(base, {
  languageOptions: {
    parserOptions: {
      // NOTE: ES2021 doesn't support top-level await.
      ecmaVersion: 2021,
    },
    globals: {
      ...globals.es2021,
    },
  },
  rules: {
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
    ],
    "unicorn/prefer-string-replace-all": 2,
  },
});

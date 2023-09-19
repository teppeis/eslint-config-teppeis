import globals from "globals";
import { merge } from "../merge.mjs";
import prev from "./es2021-numeric-separators.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
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
    "unicorn/prefer-string-replace-all": 2,
  },
});

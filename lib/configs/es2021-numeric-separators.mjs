import { merge } from "../merge.mjs";
import prev from "./base.mjs";

// TODO: merge to es2021

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
    },
  },
  rules: {
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
    ],
  },
});

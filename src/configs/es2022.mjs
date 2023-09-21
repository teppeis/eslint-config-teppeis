import { merge } from "../merge.js";
import prev from "./es2021.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
    },
    // no new globals
  },
  rules: {
    "prefer-object-has-own": 2,
    "unicorn/prefer-at": 2,
  },
});

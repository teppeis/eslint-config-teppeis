import { merge } from "../merge.mjs";
import prev from "./es2022-class-fields.mjs";

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

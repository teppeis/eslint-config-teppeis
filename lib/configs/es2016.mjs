import { merge } from "../merge.mjs";
import prev from "./es2015.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    // no new globals
    parserOptions: {
      ecmaVersion: 2016,
    },
  },
  rules: {
    "prefer-exponentiation-operator": 2,
  },
});

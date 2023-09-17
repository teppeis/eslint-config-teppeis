import globals from "globals";
import { merge } from "../merge.mjs";
import prev from "./es2019.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    globals: {
      ...globals.es2020,
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
  rules: {
    "no-unsafe-optional-chaining": 2,
    "unicorn/prefer-logical-operator-over-ternary": 2,
  },
});

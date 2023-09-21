import { merge } from "../merge.mjs";
import prev from "./es2022.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2023,
    },
    // no new globals
  },
  rules: {},
});

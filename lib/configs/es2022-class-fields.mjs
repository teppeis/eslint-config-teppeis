import { merge } from "../merge.mjs";
import prev from "./es2021.mjs";

// TODO: merge to es2022

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
    },
  },
  rules: {},
});

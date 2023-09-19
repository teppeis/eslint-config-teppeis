import globals from "globals";
import { merge } from "../merge.mjs";
import prev from "./es2016.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(prev, {
  languageOptions: {
    globals: {
      ...globals.es2017,
    },
    parserOptions: {
      ecmaVersion: 2017,
    },
  },
  rules: {
    // ## Possible Problems
    // this is a useful case of `await`
    // 'no-await-in-loop': 0,
  },
});

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

    // ## Layout & Formatting
    // overriding base setting
    // ES2017 allows trailing comma in "functions"
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
  },
});

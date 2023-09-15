import globals from "globals";
import prev from "./es2021-numeric-separators.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
      },
    },
    rules: {
      "unicorn/prefer-string-replace-all": 2,
    },
  },
];

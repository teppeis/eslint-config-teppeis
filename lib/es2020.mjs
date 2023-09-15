import globals from "globals";
import prev from "./es2019.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
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
  },
];

import prev from "./es2021.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
      parserOptions: {
        ecmaVersion: 2022,
      },
    },
    rules: {},
  },
];

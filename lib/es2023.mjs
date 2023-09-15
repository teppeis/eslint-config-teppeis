import prev from "./es2022.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
      parserOptions: {
        ecmaVersion: 2023,
      },
    },
    rules: {},
  },
];

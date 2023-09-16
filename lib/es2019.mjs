import prev from "./es2018.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
      parserOptions: {
        ecmaVersion: 2019,
      },
    },
    rules: {
      "unicorn/prefer-string-trim-start-end": 2,
      "unicorn/prefer-optional-catch-binding": 2,
    },
  },
];

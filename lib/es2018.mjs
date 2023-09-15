import prev from "./es2017.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
    rules: {
      "prefer-object-spread": 2,
      "unicorn/no-useless-fallback-in-spread": 2,
      "unicorn/no-useless-spread": 2,
    },
  },
];

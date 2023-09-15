import prev from "./es2020.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
      parserOptions: {
        ecmaVersion: 2021,
      },
    },
    rules: {
      "unicorn/numeric-separators-style": [
        "error",
        { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
      ],
    },
  },
];

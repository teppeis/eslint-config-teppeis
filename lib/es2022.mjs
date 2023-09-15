import prev from "./es2022-class-fields.mjs";

const array = [];
console.log(array[array.length - 1]);

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      // no new globals
    },
    rules: {
      "prefer-object-has-own": 2,
      "unicorn/prefer-at": 2,
    },
  },
];

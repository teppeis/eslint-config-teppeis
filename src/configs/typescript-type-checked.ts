import { merge } from "../merge.js";
import { typescript } from "./typescript.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const typescriptTypeChecked = merge(typescript, {
  languageOptions: {
    parserOptions: {
      project: true,
    },
  },
  rules: {
    // Extend ESLint rules
    "no-throw-literal": 0,
    "@typescript-eslint/no-throw-literal": 2,

    "@typescript-eslint/await-thenable": 2,
    "@typescript-eslint/consistent-type-exports": 2,
    "@typescript-eslint/no-floating-promises": 2,
    "@typescript-eslint/no-for-in-array": 2,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/no-mixed-enums": 2,
    "@typescript-eslint/no-unnecessary-condition": 2,
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    "@typescript-eslint/restrict-plus-operands": 2,
    "@typescript-eslint/restrict-template-expressions": 2,
    "@typescript-eslint/switch-exhaustiveness-check": 2,
    // override with jest/unbound-method for testing
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    "@typescript-eslint/unbound-method": 2,
  },
});

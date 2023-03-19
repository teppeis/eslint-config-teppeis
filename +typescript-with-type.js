"use strict";

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
module.exports = {
  extends: ["./+typescript.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        // Extend ESLint rules
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": 2,

        "@typescript-eslint/await-thenable": 2,
        // TS3.8+
        "@typescript-eslint/consistent-type-exports": 2,
        "@typescript-eslint/no-floating-promises": 2,
        "@typescript-eslint/no-for-in-array": 2,
        "@typescript-eslint/no-misused-promises": 2,
        "@typescript-eslint/no-mixed-enums": 2,
        // only for strictNullChecks enabled
        "@typescript-eslint/no-unnecessary-condition": 2,
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/restrict-plus-operands": [2, { checkCompoundAssignments: true }],
        "@typescript-eslint/restrict-template-expressions": 2,
        "@typescript-eslint/switch-exhaustiveness-check": 2,
        // override with jest/unbound-method for testing
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        "@typescript-eslint/unbound-method": 2,
      },
    },
  ],
};

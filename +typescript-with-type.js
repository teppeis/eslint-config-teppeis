"use strict";

module.exports = {
  extends: ["./+typescript.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/restrict-plus-operands": 2,
        // too opinionated
        // '@typescript-eslint/promise-function-async': 2,
      },
    },
  ],
};

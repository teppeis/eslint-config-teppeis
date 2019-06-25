"use strict";

module.exports = {
  extends: ["./+typescript.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/no-floating-promises": 2,
        "@typescript-eslint/no-unnecessary-type-assertion": 2,
        "@typescript-eslint/restrict-plus-operands": 2,
        // too opinionated
        // "@typescript-eslint/promise-function-async": 2,
      },
    },
  ],
};

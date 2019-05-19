"use strict";

module.exports = {
  extends: "plugin:@typescript-eslint/eslint-recommended",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // allow overload
        // see https://github.com/typescript-eslint/typescript-eslint/issues/291
        "no-dupe-class-members": 0,

        // ES2019 available in TypeScript
        "node/no-unsupported-features/es-syntax": 0,

        // allow special triple slashes comment: "/// <reference />"
        "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,

        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/prefer-namespace-keyword": 2,
        // allow require for power-assert
        // '@typescript-eslint/no-require-imports': 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/no-object-literal-type-assertion": 2,
      },
      settings: {
        node: {
          tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
        },
      },
    },
  ],
};

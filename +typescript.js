"use strict";

module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "./+module.js",
        "plugin:import/typescript",
      ],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // ES2019 available in TypeScript
        "node/no-unsupported-features/es-syntax": 0,

        // allow special triple slashes comment: "/// <reference />"
        "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

        // Extend ESLint rules
        // Skip extending stylistic rules that are overrided by prettier
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,
        "no-loss-of-precision": 0,
        "@typescript-eslint/no-loss-of-precision": 2,
        "no-invalid-this": 2,
        "@typescript-eslint/no-invalid-this": 2,
        "no-loop-func": 2,
        "@typescript-eslint/no-loop-func": 2,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          2,
          { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
        ],

        // rules
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/array-type": [2, { default: "array-simple" }],
        "@typescript-eslint/ban-ts-comment": [
          2,
          {
            "ts-expect-error": false,
            "ts-ignore": true,
            "ts-nocheck": false,
            "ts-check": false,
          },
        ],
        "@typescript-eslint/ban-types": 2,
        "@typescript-eslint/consistent-type-assertions": 2,
        "@typescript-eslint/consistent-type-imports": 2,
        "@typescript-eslint/no-extra-non-null-assertion": 2,
        "@typescript-eslint/no-inferrable-types": 2,
        "@typescript-eslint/no-misused-new": 2,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/no-non-null-asserted-optional-chain": 2,
        "@typescript-eslint/no-non-null-assertion": 2,
        // allow require for power-assert
        // '@typescript-eslint/no-require-imports': 2,
        "@typescript-eslint/no-unnecessary-type-constraint": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/prefer-as-const": 2,
        "@typescript-eslint/prefer-literal-enum-member": 2,
        "@typescript-eslint/prefer-namespace-keyword": 2,
        "@typescript-eslint/prefer-ts-expect-error": 2,
        "@typescript-eslint/triple-slash-reference": 2,
      },
      settings: {
        jsdoc: {
          mode: "typescript",
        },
        node: {
          tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
        },
        "import/resolver": {
          typescript: {},
        },
      },
    },
  ],
};

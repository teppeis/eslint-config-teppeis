"use strict";

module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "./+module.js",
        "plugin:import/typescript",
      ],
      rules: {
        // ES2019 available in TypeScript
        "node/no-unsupported-features/es-syntax": 0,

        // Allow special triple slashes comment: "/// <reference />"
        "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

        // Extend ESLint rules
        // skip extending stylistic rules that are overrided by prettier
        "no-invalid-this": 2,
        "@typescript-eslint/no-invalid-this": 2,
        "no-loop-func": 2,
        "@typescript-eslint/no-loop-func": 2,
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          2,
          { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
        ],

        // Override recommended rules
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

        // Additional rules
        "@typescript-eslint/consistent-type-assertions": 2,
        "@typescript-eslint/consistent-type-imports": 2,
        "@typescript-eslint/no-useless-empty-export": 2,
        // allow require for power-assert
        // '@typescript-eslint/no-require-imports': 2,
        "@typescript-eslint/prefer-literal-enum-member": 2,
        "@typescript-eslint/prefer-ts-expect-error": 2,
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

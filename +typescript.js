"use strict";

const TS_EXTENSIONS = require("./lib/ts-extensions");

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
module.exports = {
  overrides: [
    {
      files: TS_EXTENSIONS.map((ext) => `*${ext}`),
      extends: ["plugin:@typescript-eslint/recommended", "./lib/module-base.js"],
      rules: {
        // ES2019+ available in TypeScript
        "n/no-unsupported-features/es-syntax": 0,

        // Allow special triple slashes comment: "/// <reference />"
        "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

        // Extend ESLint rules (enabled in lib/base.js)
        // NOTE: skip extending stylistic rules that are overrided by prettier
        "no-extra-semi": 0,
        "@typescript-eslint/no-extra-semi": 2,
        "no-invalid-this": 0,
        "@typescript-eslint/no-invalid-this": 2,
        "no-loop-func": 0,
        "@typescript-eslint/no-loop-func": 2,
        "no-unused-expressions": 0,
        "@typescript-eslint/no-unused-expressions": [
          2,
          { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
        ],

        // Override recommended rules
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

        // Stylistic rules
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/consistent-type-assertions": 2,
        "@typescript-eslint/no-empty-interface": 2,
        "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/no-inferrable-types": 2,

        // Additional rules
        "@typescript-eslint/consistent-type-imports": 2,
        "@typescript-eslint/no-import-type-side-effects": 2,
        // allow require for power-assert and verbatimModuleSyntax
        // '@typescript-eslint/no-require-imports': 2,
        "@typescript-eslint/prefer-literal-enum-member": 2,
        "@typescript-eslint/prefer-ts-expect-error": 2,
      },
      settings: {
        jsdoc: {
          mode: "typescript",
        },
        "import/extensions": [".mjs", ...TS_EXTENSIONS],
        "import/external-module-folders": ["node_modules", "node_modules/@types"],
        "import/parsers": {
          "@typescript-eslint/parser": TS_EXTENSIONS,
        },
        "import/resolver": {
          typescript: TS_EXTENSIONS,
        },
      },
    },
    {
      files: ["*.mts"],
      extends: ["./lib/module-globals.js"],
    },
  ],
};

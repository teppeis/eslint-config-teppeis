import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import { merge } from "../merge.js";
import { nonNull } from "../utils.js";
import { moduleBase } from "./module-base.js";

const tsEsEslintRecomRules = nonNull(
  nonNull(tsEslintPlugin.configs["eslint-recommended"].overrides)[0].rules,
);

export const typescript = merge(moduleBase, {
  files: ["**/*.{ts,tsx,mts,cts}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // @ts-expect-error TSESLint doesn't support flat config typings yet
    parser: tsEslintParser,
  },
  plugins: {
    // @ts-expect-error TSESLint doesn't support flat config typings yet
    "@typescript-eslint": tsEslintPlugin,
  },
  rules: {
    ...tsEsEslintRecomRules,
    ...tsEslintPlugin.configs.recommended.rules,

    // Allow special triple slashes comment: "/// <reference />"
    "spaced-comment": [
      2,
      "always",
      { line: { markers: ["/"] }, block: { balanced: true } },
    ],

    // Check with TSC instead
    "n/no-missing-import": 0,

    // Extend ESLint rules (enabled in base config)
    // NOTE: skip extending stylistic rules that are overrided by prettier
    "no-invalid-this": 0,
    "@typescript-eslint/no-invalid-this": 2,
    "no-loop-func": 0,
    "@typescript-eslint/no-loop-func": 2,
    "no-unused-expressions": 0,
    "@typescript-eslint/no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
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
    // Don't enable rules that requires TypeScript parser for perf reasons.
    "import/resolver": "typescript",
  },
});

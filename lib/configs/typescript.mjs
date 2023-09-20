import { FlatCompat } from "@eslint/eslintrc";
// TODO: fix import/no-unresolved that doesn't support exports
// eslint-disable-next-line import/no-unresolved
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
// eslint-disable-next-line import/no-unresolved
import tsEslintParser from "@typescript-eslint/parser";
import { fileURLToPath } from "node:url";
import { merge } from "../merge.mjs";
import moduleBase from "../module-base.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const tsEsEslintRecom = compat.extends("plugin:@typescript-eslint/eslint-recommended");
if (tsEsEslintRecom.length !== 1) {
  throw new TypeError(
    `Unexpected @typescript-eslint/eslint-recommended config array length: ${tsEsEslintRecom.length}`,
  );
}
const tsEsEslintRecomRules = tsEsEslintRecom[0].rules;

const TS_EXTENSIONS = [".ts", ".tsx", ".mts", ".cts"];

/** @type {import("eslint").Linter.FlatConfig} */
export default merge(moduleBase, {
  files: ["**/*.{ts,tsx,mts,cts}"],
  languageOptions: {
    parser: tsEslintParser,
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  plugins: {
    "@typescript-eslint": tsEslintPlugin,
  },
  rules: {
    ...tsEsEslintRecomRules,
    ...tsEslintPlugin.configs.recommended.rules,

    // Allow special triple slashes comment: "/// <reference />"
    "spaced-comment": [2, "always", { line: { markers: ["/"] }, block: { balanced: true } }],

    // Extend ESLint rules (enabled in lib/base.js)
    // NOTE: skip extending stylistic rules that are overrided by prettier
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
});

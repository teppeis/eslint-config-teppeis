/**
 * @fileoverview Disable globals unavailable in Node ESM
 */
import type { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";

export const nodeEsm: Linter.Config = {
  languageOptions: {
    sourceType: "module",
  },
  plugins: { unicorn },
  rules: {
    "unicorn/prefer-module": 2,
  },
};

/**
 * @fileoverview Disable globals unavailable in Node ESM
 */
import unicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.FlatConfig} */
export default {
  languageOptions: {
    sourceType: "module",
  },
  plugins: { unicorn },
  rules: {
    "unicorn/prefer-module": 2,
  },
  settings: {
    "import/parsers": {
      espree: [".js", ".cjs", ".mjs", ".jsx"],
    },
  },
};

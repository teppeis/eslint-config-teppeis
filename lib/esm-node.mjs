/**
 * @fileoverview Disable globals unavailable in Node ESM
 */
import unicorn from "eslint-plugin-unicorn";

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  plugins: { unicorn },
  rules: {
    "unicorn/prefer-module": 2,
  },
};

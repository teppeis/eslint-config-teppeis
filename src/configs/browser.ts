import type { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

export const browser: Linter.Config = {
  files: ["**/*.{js,cjs,mjs,jsx,ts,tsx,cts,mts}"],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  plugins: { unicorn },
  rules: {
    "unicorn/prefer-blob-reading-methods": 2,
    "unicorn/prefer-dom-node-append": 2,
    "unicorn/prefer-dom-node-dataset": 2,
    "unicorn/prefer-dom-node-remove": 2,
    "unicorn/prefer-dom-node-text-content": 2,
    "unicorn/prefer-modern-dom-apis": 2,
    "unicorn/require-post-message-target-origin": 2,
  },
};

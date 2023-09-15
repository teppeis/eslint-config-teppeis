import n from "eslint-plugin-n";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  languageOptions: {
    globals: globals.node,
  },
  plugins: { n, unicorn },
  rules: {
    // ## eslint-plugin-n
    "n/handle-callback-err": 2,
    "n/no-deprecated-api": 2,
    "n/no-extraneous-import": 2,
    "n/no-extraneous-require": 2,
    // use "import/no-unresolved" instead
    // "n/no-missing-import": 2,
    "n/no-missing-require": 2,
    "n/no-new-require": 2,
    "n/no-unpublished-bin": 2,
    "n/no-unpublished-import": 2,
    "n/no-unpublished-require": 2,
    // "n/no-unsupported-features/es-builtins": 2,
    // "n/no-unsupported-features/es-syntax": 2,
    // "n/no-unsupported-features/node-builtins": 2,
    "n/process-exit-as-throw": 2,
    "n/shebang": 2,

    // ## eslint-plugin-unicorn
    "unicorn/no-process-exit": 2,
    "unicorn/prefer-node-protocol": 2,
  },
  // TODO
  // overrides: [
  //   {
  //     files: ["*.mjs"],
  //     extends: ["./module-js.js"],
  //     settings: {
  //       "import/extensions": [".mjs"],
  //     },
  //   },
  // ],
};

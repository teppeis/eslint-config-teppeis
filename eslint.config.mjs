import js from "@eslint/js";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  {
    ignores: ["test/fixtures", "examples"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    // files: ["**/test/**/*.js", "**/test/**/*.ts"],
    files: ["**/test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      // allow `this.timeout(1000)`
      // "no-invalid-this": 0,
    },
  },
];

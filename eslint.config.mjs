import js from "@eslint/js";
import globals from "globals";
import { es2022, prettier } from "./index.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  ...es2022,
  prettier,
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

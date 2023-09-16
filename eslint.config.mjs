import globals from "globals";
import { es2022, node, prettier } from "./index.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...es2022,
  ...node,
  prettier,
  {
    ignores: ["test/fixtures", "examples"],
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

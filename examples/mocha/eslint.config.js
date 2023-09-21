import globals from "globals";
import mocha from "../../dist/configs/mocha.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    languageOptions: {
      globals: { ...globals.node },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-undef": 2,
    },
  },
  mocha,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

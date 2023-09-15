import globals from "globals";
import prev from "./es2016.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      globals: {
        ...globals.es2017,
      },
      parserOptions: {
        ecmaVersion: 2017,
      },
    },
    rules: {
      // ## Possible Errors
      // this is a useful case of `await`
      // 'no-await-in-loop': 0,

      // ## Override
      // ES2017 allows trailing comma in "functions"
      "comma-dangle": [
        2,
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
    },
  },
];

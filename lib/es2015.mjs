import globals from "globals";
import prev from "./base.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...prev,
  {
    languageOptions: {
      globals: {
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 2015,
      },
    },
    rules: {
      // ## Possible Problems
      "no-async-promise-executor": 2,
      // use "import/no-duplicates" instead
      // "no-duplicate-imports": 2,
      "no-import-assign": 2,
      "no-misleading-character-class": 2,
      "require-atomic-updates": 2,

      // ## Suggestions
      "arrow-body-style": 2,
      "no-confusing-arrow": [2, { onlyOneSimpleParam: true }],
      "no-useless-computed-key": 2,
      "no-useless-rename": 2,
      "no-var": 2,
      "object-shorthand": [2, "methods"],
      "prefer-arrow-callback": [2, { allowNamedFunctions: true }],
      "prefer-const": 2,
      "prefer-destructuring": [2, { object: true, array: false }],
      "prefer-numeric-literals": 2,
      "prefer-rest-params": 2,
      "prefer-template": 2,

      // ## Layout & Formatting
      "arrow-parens": [2, "as-needed"],
      "arrow-spacing": 2,
      "generator-star-spacing": [2, { named: "after", anonymous: "neither", method: "neither" }],
      "rest-spread-spacing": 2,
      "template-curly-spacing": 2,
      "template-tag-spacing": 2,
      "yield-star-spacing": [2, "after"],

      // # eslint-plugin-unicorn
      // https://github.com/sindresorhus/eslint-plugin-unicorn
      "unicorn/custom-error-definition": 2,
      "unicorn/no-for-loop": 2,
      "unicorn/no-typeof-undefined": 2,
      "unicorn/no-useless-promise-resolve-reject": 2,
      "unicorn/prefer-default-parameters": 2,
      "unicorn/prefer-includes": 2,
      "unicorn/prefer-number-properties": [2, { checkInfinity: false }],
      "unicorn/prefer-math-trunc": 2,
      "unicorn/prefer-string-starts-ends-with": 2,
    },
  },
];

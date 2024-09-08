import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import unicorn from "eslint-plugin-unicorn";
import { merge } from "../merge.js";

export const base = merge(js.configs.recommended, comments.recommended, {
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "script",
  },
  plugins: {
    // Be careful when removing these plugins!
    // They may be referenced by other config files.
    unicorn,
    jsdoc,
  },
  linterOptions: {
    // replace "eslint-comments/no-unused-disable"
    reportUnusedDisableDirectives: "error",
  },
  rules: {
    // ## Possible Problems
    "array-callback-return": 2,
    "no-async-promise-executor": 2,
    // this is a useful case of `await`
    // 'no-await-in-loop': 0,
    // overwrite recommended: allow `while (true)`
    "no-constant-condition": [2, { checkLoops: false }],
    // overwrite recommended: allow `try {foo();} catch (e) {}`
    "no-empty": [2, { allowEmptyCatch: true }],
    // use "import-x/no-duplicates" instead
    // "no-duplicate-imports": 2,
    "no-import-assign": 2,
    "no-misleading-character-class": 2,
    "no-self-compare": 2,
    "no-unmodified-loop-condition": 2,
    // overwrite recommended: disallow `if (! a < b) {}`
    "no-unsafe-negation": [2, { enforceForOrderingRelations: true }],
    "no-unsafe-optional-chaining": 2,
    // overwrite recommended: allow args
    "no-unused-vars": [2, { args: "none" }],
    "require-atomic-updates": 2,
    // overwrite recommended: disallow `array.indexOf(NaN)`
    "use-isnan": [2, { enforceForIndexOf: true }],

    // ## Suggestions
    "arrow-body-style": 2,
    // prefer `let` or `const`
    "block-scoped-var": 2,
    "default-case": 2,
    // not for Closure
    "dot-notation": 2,
    eqeqeq: [2, "smart"],
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-eval": 2,
    // don't touch native prototype!
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    // use `String(a)` instead of `'' + a`
    "no-implicit-coercion": [2, { allow: ["!!"] }],
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-object-constructor": 2,
    "no-octal-escape": 2,
    // want to warn only props...
    // "no-param-reassign": [2, {"props": true}],
    "no-proto": 2,
    "no-return-assign": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-undef-init": 2,
    // prevented by `no-global-assign` and `no-shadow-restricted-names`
    // 'no-undefined': 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-rename": 2,
    "no-useless-return": 2,
    "no-var": 2,
    "no-void": 2,
    "object-shorthand": [2, "methods"],
    "operator-assignment": [2, "always"],
    "prefer-arrow-callback": [2, { allowNamedFunctions: true }],
    "prefer-const": 2,
    "prefer-destructuring": [2, { object: true, array: false }],
    "prefer-exponentiation-operator": 2,
    "prefer-numeric-literals": 2,
    "prefer-object-spread": 2,
    "prefer-rest-params": 2,
    "prefer-template": 2,
    radix: 2,
    strict: [2, "global"],
    yoda: [2, "never", { onlyEquality: true }],

    // ## Layout & Formatting
    "unicode-bom": 2,

    // # prettier
    // recommended rules but conflict with prettier
    // https://github.com/prettier/eslint-config-prettier
    "no-unexpected-multiline": 0,
    // TODO: The following two rules were deprecated in v8.53.0
    // and will be removed from recommended in v9.0.0.
    "no-extra-semi": 0,
    "no-mixed-spaces-and-tabs": 0,

    // # @eslint-community/eslint-plugin-eslint-comments
    // https://github.com/eslint-community/eslint-plugin-eslint-comments
    "@eslint-community/eslint-comments/disable-enable-pair": [
      2,
      { allowWholeFile: true },
    ],
    // overwrite recommended
    "@eslint-community/eslint-comments/no-unlimited-disable": 0,

    // # eslint-plugin-unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn/custom-error-definition": 2,
    "unicorn/escape-case": 2,
    "unicorn/new-for-builtins": 2,
    "unicorn/no-for-loop": 2,
    "unicorn/no-hex-escape": 2,
    "unicorn/no-instanceof-array": 2,
    "unicorn/no-typeof-undefined": 2,
    "unicorn/no-useless-fallback-in-spread": 2,
    "unicorn/no-useless-promise-resolve-reject": 2,
    "unicorn/no-useless-spread": 2,
    "unicorn/prefer-array-index-of": 2,
    "unicorn/prefer-date-now": 2,
    "unicorn/prefer-default-parameters": 2,
    "unicorn/prefer-includes": 2,
    "unicorn/prefer-logical-operator-over-ternary": 2,
    "unicorn/prefer-math-trunc": 2,
    "unicorn/prefer-negative-index": 2,
    "unicorn/prefer-number-properties": [2, { checkInfinity: false }],
    "unicorn/prefer-optional-catch-binding": 2,
    "unicorn/prefer-regexp-test": 2,
    "unicorn/prefer-string-slice": 2,
    "unicorn/prefer-string-starts-ends-with": 2,
    "unicorn/prefer-string-trim-start-end": 2,
    "unicorn/prefer-type-error": 2,

    // # eslint-plugin-jsdoc
    // https://github.com/gajus/eslint-plugin-jsdoc
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": [2, { unifyParentAndChildTypeChecks: true }],
    // missing many global types
    // 'jsdoc/no-undefined-types': 2,
    "jsdoc/require-hyphen-before-param-description": [2, "never"],
    "jsdoc/require-param-name": 2,
    "jsdoc/require-returns-check": 2,
    "jsdoc/valid-types": 2,
  },
  settings: {
    jsdoc: {
      mode: "typescript",
      // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
      preferredTypes: {
        object: "Object",
        ".": "<>",
      },
      // https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
      tagNamePreference: {
        augments: "extends",
        class: "constructor",
        constant: "const",
        exports: "export",
        file: "fileoverview",
        inheritdoc: "inheritDoc",
        returns: "return",
      },
    },
  },
});

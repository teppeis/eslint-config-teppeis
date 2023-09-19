import js from "@eslint/js";
import comments from "eslint-plugin-eslint-comments";
import jsdoc from "eslint-plugin-jsdoc";
import unicorn from "eslint-plugin-unicorn";
import { merge } from "../merge.mjs";

// TODO: merge until es2020

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(js.configs.recommended, {
  languageOptions: {
    sourceType: "script",
  },
  plugins: {
    unicorn,
    jsdoc,
    "eslint-comments": comments,
  },
  linterOptions: {
    // replace "eslint-comments/no-unused-disable" but warn only
    reportUnusedDisableDirectives: true,
  },
  rules: {
    ...comments.configs.recommended.rules,

    // ## Possible Problems
    "array-callback-return": 2,
    // overwrite recommended: allow `while (true)`
    "no-constant-condition": [2, { checkLoops: false }],
    // overwrite recommended: allow `try {foo();} catch (e) {}`
    "no-empty": [2, { allowEmptyCatch: true }],
    "no-self-compare": 2,
    "no-unmodified-loop-condition": 2,
    // overwrite recommended: disallow `if (! a < b) {}`
    "no-unsafe-negation": [2, { enforceForOrderingRelations: true }],
    // overwrite recommended: allow args
    "no-unused-vars": [2, { args: "none" }],
    // overwrite recommended: disallow `array.indexOf(NaN)`
    "use-isnan": [2, { enforceForIndexOf: true }],

    // ## Suggestions
    // prefer `let` or `const`
    "block-scoped-var": 2,
    "default-case": 2,
    // not for Closure
    "dot-notation": 2,
    eqeqeq: [2, "smart"],
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
    "no-unused-expressions": [
      2,
      { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
    ],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-void": 2,
    radix: 2,
    // => es2017
    // "require-await": 2,
    strict: [2, "global"],
    yoda: [2, "never", { onlyEquality: true }],

    // ## Layout & Formatting
    "no-array-constructor": 2,
    "no-new-object": 2,
    "no-unneeded-ternary": 2,
    "operator-assignment": [2, "always"],
    "unicode-bom": 2,

    // # prettier
    // recommended rules but conflict with prettier
    // https://github.com/prettier/eslint-config-prettier
    "no-unexpected-multiline": 0,
    "no-extra-semi": 0,
    "no-mixed-spaces-and-tabs": 0,

    // # eslint-plugin-eslint-comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    "eslint-comments/disable-enable-pair": [2, { allowWholeFile: true }],
    // overwrite recommended
    "eslint-comments/no-unlimited-disable": 0,

    // # eslint-plugin-unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn/no-instanceof-array": 2,
    "unicorn/escape-case": 2,
    "unicorn/new-for-builtins": 2,
    "unicorn/no-hex-escape": 2,
    "unicorn/prefer-negative-index": 2,
    "unicorn/prefer-array-index-of": 2,
    "unicorn/prefer-date-now": 2,
    "unicorn/prefer-regexp-test": 2,
    "unicorn/prefer-string-slice": 2,
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

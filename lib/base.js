"use strict";

module.exports = {
  extends: ["eslint:recommended", "plugin:eslint-comments/recommended"],
  plugins: ["unicorn", "jsdoc"],
  rules: {
    // ## Possible Errors
    // overwrite recommended: allow `while (true)`
    "no-constant-condition": [2, { checkLoops: false }],
    // overwrite recommended: allow `try {foo();} catch (e) {}`
    "no-empty": [2, { allowEmptyCatch: true }],
    // overwrite recommended: disallow `array.indexOf(NaN)`
    "use-isnan": [2, { enforceForIndexOf: true }],
    // overwrite recommended: disallow `if (! a < b) {}`
    "no-unsafe-negation": [2, { enforceForOrderingRelations: true }],

    // ## Best Practices
    // These are rules designed to prevent you from making mistakes.
    // They either prescribe a better way of doing something or help you avoid footguns.
    "array-callback-return": 2,
    // prefer `let` or `const`
    "block-scoped-var": 2,
    curly: [2, "multi-line", "consistent"],
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
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    // want to warn only props...
    // "no-param-reassign": [2, {"props": true}],
    "no-proto": 2,
    "no-return-assign": 2,
    // => es2017
    // overwrite recommended: "no-return-await": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": [
      2,
      { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
    ],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-void": 2,
    "no-with": 2,
    radix: 2,
    // => es2017
    // "require-await": 2,
    yoda: [2, "never", { onlyEquality: true }],

    // ## Strict Mode
    // These rules relate to using strict mode and strict mode directives.
    strict: [2, "global"],

    // ## Variables
    // These rules have to do with variable declarations.
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    // prevented by `no-global-assign` and `no-shadow-restricted-names`.
    // 'no-undefined': 2,
    // overwrite recommended: allow args
    "no-unused-vars": [2, { args: "none" }],

    // ## Stylistic Issues
    // These rules are purely matters of style and are quite subjective.
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, { after: true, before: false }],
    "comma-style": [2, "last", { exceptions: { NewExpression: false } }],
    "computed-property-spacing": [2, "never"],
    "eol-last": 2,
    "func-call-spacing": 2,
    "id-blacklist": 2,
    indent: [2, 2, { SwitchCase: 1 }],
    "jsx-quotes": 2,
    "key-spacing": 2,
    "keyword-spacing": [2, { after: true, before: true }],
    "linebreak-style": [2, "unix"],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-multiple-empty-lines": [2, { max: 2, maxBOF: 0, maxEOF: 0 }],
    "no-new-object": 2,
    "no-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": 0,
    "object-curly-spacing": [2, "never"],
    "object-curly-newline": 2,
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "padding-line-between-statements": [
      2,
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
    ],
    "quote-props": [2, "as-needed", { unnecessary: false }],
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: 2,
    "semi-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    "semi-style": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      { anonymous: "never", named: "never", asyncArrow: "always" },
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always", { block: { balanced: true } }],
    "switch-colon-spacing": 2,
    "unicode-bom": 2,

    // # eslint-plugin-eslint-comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    "eslint-comments/disable-enable-pair": [2, { allowWholeFile: true }],
    // overwrite recommended
    "eslint-comments/no-unlimited-disable": 0,
    "eslint-comments/no-unused-disable": 2,

    // # eslint-plugin-unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn/escape-case": 2,
    "unicorn/new-for-builtins": 2,
    "unicorn/no-hex-escape": 2,
    "unicorn/number-literal-case": 2,
    "unicorn/prefer-type-error": 2,

    // # eslint-plugin-jsdoc
    // https://github.com/gajus/eslint-plugin-jsdoc
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": [
      2,
      {
        definedTags: [
          // https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/parsing/Annotation.java
          // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/src/tagNames.js
          "consistentIdGenerator",
          "customElement",
          "define",
          "dict",
          "disposes",
          // defined in tagNamePreference
          // 'export',
          "expose",
          "externs",
          "final",
          "hidden",
          "idGenerator",
          "implicitCast",
          // defined in tagNamePreference
          // 'inheritDoc',
          "meaning",
          "mixinClass",
          "mixinFunction",
          "modifies",
          "ngInject",
          "nocollapse",
          "nocompile",
          "noinline",
          "nosideeffects",
          "owner",
          "package",
          "polymer",
          "polymerBehavior",
          "preserve",
          "record",
          "stableIdGenerator",
          "struct",
          "suppress",
          "template",
          "typeSummary",
          "unrestricted",
          "wizaction",
        ],
      },
    ],
    "jsdoc/check-types": [2, { unifyParentAndChildTypeChecks: true }],
    // missing many global types
    // 'jsdoc/no-undefined-types': 2,
    "jsdoc/require-hyphen-before-param-description": [2, "never"],
    "jsdoc/require-param-name": 2,
    "jsdoc/require-returns-check": 2,
    // incompatible with closure style @extend
    // maybe fixed in https://github.com/gajus/eslint-plugin-jsdoc/issues/305
    "jsdoc/valid-types": 2,
  },
  settings: {
    jsdoc: {
      // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
      preferredTypes: {
        object: "Object",
        ".": "<>",
      },
      // https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
      tagNamePreference: {
        arg: "param",
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
};

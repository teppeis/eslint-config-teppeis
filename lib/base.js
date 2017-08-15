"use strict";

module.exports = {
  "extends": "eslint:recommended",
  "plugins": ["eslint-comments"],
  "env": {
  },
  "globals": {
  },
  "rules": {
    // ## Possible Errors
    // The following rules point out areas where you might have made mistakes.
    // "getter-return": 2,
    // `console` is used for simple stdout/stderr
    "no-console": 0,
    // allow `while (true)`
    "no-constant-condition": [2, {"checkLoops": false}],
    // used to clarify intention of an expression
    "no-extra-parens": 0,
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "requireParamDescription": false,
      "requireReturnDescription": false,
      "prefer": {
        "returns": "return",
      },
      "preferType": {
        "Boolean": "boolean",
        "Number": "number",
        "String": "string",
        "Null": "null",
        "Undefined": "undefined",
      },
    }],

    // ## Best Practices
    // These are rules designed to prevent you from making mistakes.
    // They either prescribe a better way of doing something or help you avoid footguns.
    "array-callback-return": 2,
    // Prefer `let` or `const`
    "block-scoped-var": 2,
    "curly": [2, "multi-line", "consistent"],
    "default-case": 2,
    // Not for Closure
    "dot-notation": 2,
    "eqeqeq": [2, "smart"],
    "no-caller": 2,
    "no-eval": 2,
    // Don't touch native prototype!
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    // Use `String(a)` instead of `'' + a`
    "no-implicit-coercion": [2, {"allow": ["!!"]}],
    // TODO: check for Node.js
    "no-implicit-globals": 2,
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
    // Want to warn only props...
    // "no-param-reassign": [2, {"props": true}],
    "no-proto": 2,
    "no-return-assign": 2,
    // => es2017
    // "no-return-await": 2,
    "no-self-assign": [2, {"props": true}],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": [2, {"allowShortCircuit": true, "allowTernary": true}],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-void": 2,
    "no-with": 2,
    "radix": 2,
    // => es2017
    // "require-await": 2,
    "yoda": [2, "never", {"onlyEquality": true}],

    // ## Strict Mode
    // These rules relate to using strict mode and strict mode directives.
    "strict": [2, "global"],

    // ## Variables
    // These rules have to do with variable declarations.
    "no-catch-shadow": 2,
    "no-label-var": 2,
    "no-shadow": 1,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": [2, {"args": "none"}],

    // ## Stylistic Issues
    // These rules are purely matters of style and are quite subjective.
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "comma-spacing": [2, {"after": true, "before": false}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "eol-last": 2,
    "func-call-spacing": 2,
    "id-blacklist": 2,
    "indent": [2, 2, {"SwitchCase": 1}],
    "jsx-quotes": 2,
    "key-spacing": 2,
    "keyword-spacing": [2, {"after": true, "before": true}],
    "linebreak-style": [2, "unix"],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-multiple-empty-lines": [2, {"max": 2, "maxBOF": 0, "maxEOF": 0}],
    "no-new-object": 2,
    "no-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": 0,
    "object-curly-spacing": [2, "never"],
    "object-curly-newline": [2, {"consistent": true}],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "padding-line-between-statements": [
      2,
      {"blankLine": "always", "prev": "directive", "next": "*"},
      {"blankLine": "any", "prev": "directive", "next": "directive"},
      {"blankLine": "always", "prev": ["import", "cjs-import"], "next": "*"},
      {"blankLine": "any", "prev": ["import", "cjs-import"], "next": ["import", "cjs-import"]},
    ],
    "quote-props": [2, "as-needed", {"unnecessary": false}],
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "semi": 2,
    "semi-spacing": [2, {
      "after": true,
      "before": false,
    }],
    "semi-style": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always", {"block": {"balanced": true}}],
    "switch-colon-spacing": 2,
    "unicode-bom": 2,

    // # eslint-plugin-eslint-comments
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    "eslint-comments/disable-enable-pair": 0,
    "eslint-comments/no-duplicate-disable": 2,
    "eslint-comments/no-unlimited-disable": 0,
    "eslint-comments/no-unused-disable": 2,
    "eslint-comments/no-unused-enable": 2,
    "eslint-comments/no-use": 0,
  },
};

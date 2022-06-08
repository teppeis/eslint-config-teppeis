"use strict";

module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    // for both TypeScript and non-TypeScript rules

    // ** Static analysis **
    "import/no-absolute-path": 2,
    "import/no-useless-path-segments": 2,
    // for monorepo
    "import/no-relative-packages": 2,

    // ** Helpful warnings **
    "import/no-deprecated": 2,
    "import/no-mutable-exports": 2,

    // ** Style guide **
    // "always" for Native ESM, "never" for CJS/TS
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "import/order": [
      2,
      {
        groups: [
          ["builtin", "external", "internal"],
          ["index", "parent", "sibling"],
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  overrides: [
    {
      // for non-TypeScript files
      files: ["*.js", "*.jsx", "*.mjs"],
      rules: {
        // ** Static analysis **
        "import/default": 2,
        "import/named": 2,
        "import/namespace": 2,
        "import/no-self-import": 2,
        "import/no-unresolved": [2, { caseSensitiveStrict: true }],

        // ** Helpful warnings **
        "import/export": 2,
        "import/no-named-as-default": 2,
        // "import/no-named-as-default-member": 2,

        // ** Style guide **
        "import/extensions": [2, "always"],
      },
    },
  ],
};

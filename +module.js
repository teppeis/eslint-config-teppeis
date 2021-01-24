"use strict";

module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    // for both TypeScript and non-TypeScript rules

    // ** Static analysis **
    "import/no-useless-path-segments": 2,

    // ** Style guide **
    // "always" for Native ESM, "never" for CJS/TS
    // "import/extensions": 2,
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "import/order": 2,
  },
  overrides: [
    {
      // for non-TypeScript files
      files: ["*.js", "*.jsx"],
      rules: {
        // ** Static analysis **
        "import/default": 2,
        "import/named": 2,
        "import/namespace": 2,
        "import/no-absolute-path": 2,
        "import/no-self-import": 2,
        "import/no-unresolved": 2,

        // ** Helpful warnings **
        "import/export": 2,
        "import/no-named-as-default": 2,
        // "import/no-named-as-default-member": 2,
      },
    },
  ],
};

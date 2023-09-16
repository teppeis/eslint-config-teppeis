/**
 * @fileoverview Config for Node ESM in JS (not TS, tsc checks them instead)
 */
import node from "./esm-node.mjs";
import base from "./module-base.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default {
  // TODO: object merge
  ...base,
  ...node,
  plugins: {
    ...base.plugins,
    ...node.plugins,
  },
  rules: {
    ...base.rules,
    ...node.rules,

    // ** Static analysis **
    "import/default": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-unresolved": [2, { caseSensitiveStrict: true }],

    // ** Helpful warnings **
    "import/export": 2,
    "import/no-named-as-default": 2,
    // "import/no-named-as-default-member": 2,

    // ** Style guide **
    "import/extensions": [2, "always"],
  },
};

/**
 * @fileoverview Config for Node ESM in JS (not TS, tsc checks them instead)
 */
import { merge } from "../merge.mjs";
import moduleBase from "../module-base.mjs";

/** @type { import("eslint").Linter.FlatConfig } */
export default merge(moduleBase, {
  rules: {
    // ** Static analysis **
    "import/default": 2,
    "import/named": 2,
    "import/namespace": 2,
    // TODO: use n/no-missing-import or disable? These import/* rules don't support package exports.
    "import/no-unresolved": [2, { caseSensitiveStrict: true }],

    // ** Helpful warnings **
    "import/export": 2,
    "import/no-named-as-default": 2,
    // "import/no-named-as-default-member": 2,

    // ** Style guide **
    "import/extensions": [2, "always"],
  },
});

/**
 * @fileoverview Config for Node ESM in JS (not TS, tsc checks them instead)
 */
import { merge } from "../merge.js";
import { moduleBase } from "./module-base.js";

export const jsEsm = merge(moduleBase, {
  rules: {
    // ** Helpful warnings **
    "import-x/export": 2,
    "import-x/no-named-as-default": 2,
    // "import-x/no-named-as-default-member": 2,

    // ** Static analysis **
    "import-x/default": 2,
    "import-x/named": 2,
    "import-x/namespace": 2,

    // ** Style guide **
    "import-x/extensions": [2, "always", { ignorePackages: true }],
  },
});

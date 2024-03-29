/**
 * @fileoverview Config for Node ESM in JS (not TS, tsc checks them instead)
 */
import { merge } from "../merge.js";
import { moduleBase } from "./module-base.js";

export const jsEsm = merge(moduleBase, {
  rules: {
    // ** Helpful warnings **
    "import/export": 2,
    "import/no-named-as-default": 2,
    // "import/no-named-as-default-member": 2,

    // ** Static analysis **
    "import/default": 2,
    "import/named": 2,
    "import/namespace": 2,

    // ** Style guide **
    "import/extensions": [2, "always", { ignorePackages: true }],
  },
  settings: {
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/parsers": {
      espree: [".js", ".cjs", ".mjs", ".jsx"],
    },
  },
});

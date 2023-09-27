import type { Linter } from "eslint";
import globals from "globals";

export const mocha: Linter.FlatConfig = {
  files: ["**/test/**/*.{js,cjs,mjs,jsx,ts,tsx,cts,mts}"],
  languageOptions: {
    globals: {
      ...globals.mocha,
    },
  },
  rules: {
    // allow `this.timeout(1000)`
    "no-invalid-this": 0,
  },
};

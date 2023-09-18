import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig } */
export default {
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

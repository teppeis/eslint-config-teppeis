"use strict";

module.exports = {
  overrides: [
    {
      files: ["**/test/**/*.js", "**/test/**/*.ts"],
      env: {
        mocha: true,
      },
      rules: {
        // allow `this.timeout(1000)`
        "no-invalid-this": 0,
      },
    },
  ],
};

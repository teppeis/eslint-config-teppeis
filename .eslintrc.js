"use strict";

module.exports = {
  root: true,
  extends: ["./node-v10.js", "./+prettier.js", "./+mocha.js"],
  overrides: [
    {
      files: ["*.mjs"],
      extends: ["./node-v14.js", "./+prettier.js", "./+module.js"],
    },
  ],
};

"use strict";

module.exports = {
  root: true,
  extends: ["./node-v12.js", "./+prettier.js", "./+mocha.js"],
  overrides: [
    {
      files: ["*.mjs"],
      extends: ["./node-v14.js", "./+prettier.js", "./+module.js"],
    },
  ],
};

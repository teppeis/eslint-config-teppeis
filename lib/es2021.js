"use strict";

module.exports = {
  extends: ["./es2021-numeric-separators.js"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {
    WeakRef: "readonly",
    FinalizationRegistry: "readonly",
    AggregateError: "readonly",
  },
};

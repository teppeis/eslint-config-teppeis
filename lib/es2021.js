"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {
    WeakRef: "readonly",
    FinalizationRegistry: "readonly",
    AggregateError: "readonly",
  },
};

import assert from "node:assert";

export const assertOk = assert.ok;

// module-base
// eslint-disable-next-line import/no-self-import
import("./esm.mjs");

// module-globals
// eslint-disable-next-line unicorn/prefer-module
require("node:assert");
// eslint-disable-next-line unicorn/prefer-module
console.log(__filename);
// eslint-disable-next-line unicorn/prefer-module
exports.foo = 1;
// eslint-disable-next-line unicorn/prefer-module
module.exports = 1;

// module-js
// A extension is required in ESM import specifire
// eslint-disable-next-line import/extensions
import("./index");

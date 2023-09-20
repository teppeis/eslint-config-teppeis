/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @fileoverview A TypeScript file in type:commonjs and module:commonjs
 */

// (faux) import is available
import fs from "node:fs";
import type { Foo } from "./mod";
import { Bar, Baz } from "./mod";

// import/require() is available
import mod = require("./mod");

// global `require()` is available
require("node:assert");

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import("./cjs");

// configs/base is loaded
const x = 0;
// eslint-disable-next-line no-compare-neg-zero
if (x === -0) {
  x.toString();
}

// configs/node20 is loaded
// eslint-disable-next-line n/no-deprecated-api
fs.exists("./foo", () => {});

// configs/typescript is loaded
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Empty {}

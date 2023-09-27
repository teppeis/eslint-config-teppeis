/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @fileoverview A CommonJS TypeScript file in type:module and module:NodeNext
 */

// (faux) import is available
import fs from "node:fs";
import type { Foo } from "./mod-cjs.cjs";
// @ts-expect-error TS2307
import { Bar } from "./mod-cjs";

// @ts-expect-error TS1471
import esm = require("./mod-esm.mjs");
import cjs = require("./mod-cjs.cjs");

// node-esm is not loaded
require("node:assert");

console.log(__filename);

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import("./cjs.cjs");

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

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @fileoverview A JSX TypeScript file in type:module and module:NodeNext
 */

// ESM import is available
import fs from "node:fs";
import type { Foo } from "./mod-esm.mjs";
// requires an extension
// @ts-expect-error TS2835
import { Bar } from "./mod-esm";

// @ts-expect-error TS1471
import esm = require("./mod-esm.mjs");
import cjs = require("./mod-cjs.cjs");

// node-esm is loaded
// eslint-disable-next-line unicorn/prefer-module
require("node:assert");

// eslint-disable-next-line unicorn/prefer-module
console.log(__filename);

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import("./jsx.js");

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

// JSX
const Button = <button>Foo</button>;

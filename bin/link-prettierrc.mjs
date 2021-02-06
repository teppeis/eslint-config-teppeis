#!/usr/bin/env node

// Run at your project root with Node v12+
// $ npx link-prettierrc

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const filename = ".prettierrc.json";
const cwd = process.cwd();
const targetUrl = new URL(`../${filename}`, import.meta.url);
const target = path.relative(cwd, fileURLToPath(targetUrl));
const dest = path.join(cwd, filename);
// console.log({ target, dest });
try {
  fs.symlinkSync(target, dest);
} catch (e) {
  if (e.code !== "EEXIST") {
    throw e;
  }
}

#!/usr/bin/env node

// Run at your project root with Node v12+
// $ npx link-prettierrc

import path from "path";
import fs from "fs";

const filename = ".prettierrc.json";
const target = new URL(`../${filename}`, import.meta.url);
const dest = path.join(process.cwd(), filename);
// console.log({ target, dest });
fs.symlinkSync(target, dest);

#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";

// parse args and only accept `--init` option
const { values } = parseArgs({
  options: { init: { type: "boolean" } },
});
if (!values.init) {
  console.log("Usage: eslint-config-teppeis --init");
  process.exit(1);
}

const { type } = findUpPackageJson();
const isTypeEsm = type === "module";
const templateFile = isTypeEsm ? "eslint.config-esm.mjs" : "eslint.config.mjs";
const templateUrl = resolveUrl(`../templates/${templateFile}`);
const cjsProxyUrl = resolveUrl(`../templates/eslint.config.cjs`);

if (fs.existsSync("eslint.config.js")) {
  throw new Error("eslint.config.js already exists.");
}

if (fs.existsSync("eslint.config.mjs")) {
  throw new Error("eslint.config.mjs already exists.");
}

if (isTypeEsm) {
  fs.copyFileSync(templateUrl, "eslint.config.js");
  console.log("create: eslint.config.js");
} else {
  fs.copyFileSync(cjsProxyUrl, "eslint.config.js");
  console.log("create: eslint.config.js (for CJS Proxy)");
  fs.copyFileSync(templateUrl, "eslint.config.mjs");
  console.log("create: eslint.config.mjs");
}

/**
 * @return {any} package.json JSON object
 */
function findUpPackageJson() {
  let dir = process.cwd();
  const { root } = path.parse(dir);
  while (dir !== root) {
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = fs.readFileSync(pkgPath, "utf8");
      return JSON.parse(pkg);
    }
    dir = path.dirname(dir);
  }
  throw new Error("package.json not found");
}

/**
 * @param {string} specifier
 * @return {URL}
 */
function resolveUrl(specifier) {
  return new URL(specifier, import.meta.url);
}

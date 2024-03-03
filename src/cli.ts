import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";

export function run() {
  // parse args and only accept `--init` option
  const { values } = parseArgs({
    options: { init: { type: "boolean" } },
  });
  if (!values.init) {
    console.log("Usage: eslint-config-teppeis --init");
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }

  if (fs.existsSync("eslint.config.js")) {
    throw new Error("eslint.config.js already exists.");
  }

  if (fs.existsSync("eslint.config.mjs")) {
    throw new Error("eslint.config.mjs already exists.");
  }

  const { type } = findUpPackageJson();
  if (type === "module") {
    const templateUrl = resolveUrl(`../templates/eslint.config-esm.mjs`);
    fs.copyFileSync(templateUrl, "eslint.config.js");
    console.log("create: eslint.config.js");
  } else {
    const templateUrl = resolveUrl(`../templates/eslint.config-cjs.mjs`);
    fs.copyFileSync(templateUrl, "eslint.config.mjs");
    console.log("create: eslint.config.mjs");
  }
}

function findUpPackageJson(): any {
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

function resolveUrl(specifier: string): URL {
  return new URL(specifier, import.meta.url);
}

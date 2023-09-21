import { build } from "./lib/build.mjs";
import { mocha } from "./lib/index.mjs";

const configs = await build({ base: "node18", typescript: true, esm: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["test/fixtures", "examples"],
  },
  {
    files: ["templates/*"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  mocha,
];

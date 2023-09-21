import { build } from "./dist/build.mjs";
import { mocha } from "./dist/index.mjs";

const configs = await build({ base: "node18", typescript: true, esm: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["dist", "examples", "test/fixtures"],
  },
  {
    files: ["templates/*"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  mocha,
];

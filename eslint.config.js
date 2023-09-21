import { build } from "./dist/build.js";
import { mocha } from "./dist/index.js";

const configs = await build({ base: "node18", typescript: true, esm: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["dist", "examples", "test/fixtures"],
  },
  {
    rules: {
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["templates/*"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  mocha,
];

import { mocha, prettier } from "./index.mjs";
import { build } from "./lib/build.mjs";

const configs = await build({ base: "node18", typescript: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["test/fixtures", "examples"],
  },
  prettier,
  mocha,
];

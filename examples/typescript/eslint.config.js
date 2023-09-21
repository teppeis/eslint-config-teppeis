import { build } from "../../dist/build.js";

const configs = await build({ base: "node20", typescript: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

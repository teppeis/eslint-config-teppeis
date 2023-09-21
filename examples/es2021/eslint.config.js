import { build } from "../../dist/build.js";

const configs = await build({ base: "es2021" });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

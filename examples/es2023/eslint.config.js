import { build } from "../../dist/build.js";

const configs = await build({ base: "es2023" });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

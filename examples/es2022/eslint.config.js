import { build } from "../../dist/index.js";

const configs = await build({ base: "es2022" });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

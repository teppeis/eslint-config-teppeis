import { build } from "../../dist/build.mjs";

const configs = await build({ base: "es2022" });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

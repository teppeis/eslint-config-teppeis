import { build } from "../../dist/build.mjs";

const configs = await build({ base: "node20", typescript: true, project: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

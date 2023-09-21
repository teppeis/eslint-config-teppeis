import { build } from "eslint-config-teppeis";

const configs = await build({ base: "node18", typescript: true });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  {
    ignores: ["dist"],
  },
];

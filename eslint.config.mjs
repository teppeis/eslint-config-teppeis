import { es2022, mocha, node, prettier } from "./index.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...es2022,
  ...node,
  prettier,
  {
    ignores: ["test/fixtures", "examples"],
  },
  mocha,
];

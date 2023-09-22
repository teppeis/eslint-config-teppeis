import { build, mocha } from "./dist/index.js";

export default await build(
  { base: "node18", typescript: true, esm: true },
  {
    ignores: ["dist", "examples", "test/fixtures"],
  },
  {
    files: ["templates/*"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  mocha,
);

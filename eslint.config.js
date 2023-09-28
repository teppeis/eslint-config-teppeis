import { build } from "eslint-config-teppeis";
import { mocha } from "eslint-config-teppeis/configs/mocha";

export default await build(
  { base: "node18", typescript: true, esm: true },
  {
    ignores: ["dist", "examples", "test/fixtures"],
  },
  {
    files: ["templates/*"],
    rules: {
      "n/no-missing-import": "off",
    },
  },
  mocha,
);

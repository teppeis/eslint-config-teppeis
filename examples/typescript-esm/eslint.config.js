import { build } from "eslint-config-teppeis";

export default await build(
  { base: "node20", typescript: true, esm: true },
  {
    ignores: ["eslint.config.{js,mjs}", "dist"],
  },
);

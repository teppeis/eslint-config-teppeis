import { build } from "eslint-config-teppeis";

export default await build(
  { base: "es2022" },
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
);

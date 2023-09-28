import { build } from "eslint-config-teppeis";

export default await build(
  {
    base: "node20",
    typescript: true,
    project: true,
  },
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
);

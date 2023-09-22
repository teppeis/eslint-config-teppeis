import { build } from "eslint-config-teppeis";

export default await build(
  { base: "node18", typescript: true },
  {
    ignores: ["dist"],
  },
);

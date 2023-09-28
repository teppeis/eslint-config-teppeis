import { build } from "eslint-config-teppeis";
import { mocha } from "eslint-config-teppeis/configs/mocha";

export default await build({ base: "node20" }, mocha, {
  ignores: ["eslint.config.{js,mjs}"],
});

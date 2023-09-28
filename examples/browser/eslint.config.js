import { build } from "eslint-config-teppeis";
import { browser } from "eslint-config-teppeis/configs";

export default await build({ base: "es2023" }, browser, {
  ignores: ["eslint.config.{js,mjs}"],
});

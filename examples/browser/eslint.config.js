import { build } from "../../dist/build.js";
import browser from "../../dist/configs/browser.mjs";

const configs = await build({ base: "node18" });

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...configs,
  browser,
  {
    rules: {
      "no-undef": 2,
    },
  },
  {
    ignores: ["eslint.config.{js,mjs}"],
  },
];

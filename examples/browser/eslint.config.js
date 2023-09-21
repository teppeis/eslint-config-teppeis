import { build } from "../../lib/build.mjs";
import browser from "../../lib/configs/browser.mjs";

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

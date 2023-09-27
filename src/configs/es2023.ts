import type { Linter } from "eslint";
import { merge } from "../merge.js";
import { es2022 } from "./es2022.js";

export const es2023: Linter.FlatConfig = merge(es2022, {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2023,
    },
    // no new globals
  },
  rules: {},
});

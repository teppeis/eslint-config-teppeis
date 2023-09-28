import type { Linter } from "eslint";
import { merge } from "../merge.js";
import { es2021 } from "./es2021.js";

export const es2022: Linter.FlatConfig = merge(es2021, {
  languageOptions: {
    ecmaVersion: 2022,
    // no new globals
  },
  rules: {
    "prefer-object-has-own": 2,
    "unicorn/prefer-at": 2,
  },
});

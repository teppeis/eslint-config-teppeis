import { merge } from "../merge.mjs";
import es2023 from "./es2023.mjs";
import node from "./node.mjs";

/** @type {import("eslint").Linter.FlatConfig} */
export default merge(es2023, node);

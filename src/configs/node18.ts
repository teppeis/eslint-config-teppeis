import { merge } from "../merge.js";
import { es2023 } from "./es2023.js";
import { node } from "./node.js";

export const node18 = merge(es2023, node);

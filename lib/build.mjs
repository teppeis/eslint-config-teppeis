import { prettier } from "../index.mjs";
import jsEsm from "./configs/js-esm.mjs";
import { merge } from "./merge.mjs";

/**
 * @param {*} options
 * @return {Promise<import("eslint").Linter.FlatConfig[]>}
 */
export async function build(options) {
  const { base, typescript, esm } = options;

  let baseConfig = {};
  let nodeEsm = {};
  // TODO: convert to template string with validated config name
  if (base === "node18") {
    baseConfig = (await import("./configs/node18.mjs")).default;
    nodeEsm = (await import("./configs/node-esm.mjs")).default;
  } else if (base === "node20") {
    baseConfig = (await import("./configs/node20.mjs")).default;
    nodeEsm = (await import("./configs/node-esm.mjs")).default;
  } else if (base === "es2021") {
    baseConfig = (await import("./configs/es2021.mjs")).default;
  } else if (base === "es2022") {
    baseConfig = (await import("./configs/es2022.mjs")).default;
  } else if (base === "es2023") {
    baseConfig = (await import("./configs/es2023.mjs")).default;
  } else {
    throw new TypeError(`Unexpected base: ${base}`);
  }

  let tsConfig;
  if (typescript) {
    // TODO: withType
    tsConfig = (await import("./configs/typescript.mjs")).default;
  }

  let cjsExtensions = "**/*.{js,jsx,cjs}";
  let esmExtensions = "**/*.mjs";
  if (esm) {
    cjsExtensions = "**/*.cjs";
    esmExtensions = "**/*.{js,jsx,mjs}";
  }
  const configArray = [
    {
      ...merge(baseConfig, prettier),
      files: [cjsExtensions],
    },
    {
      ...merge(baseConfig, jsEsm, nodeEsm, prettier),
      files: [esmExtensions],
    },
  ];
  if (tsConfig) {
    configArray.push(merge(baseConfig, nodeEsm, tsConfig));
  }
  return configArray;
}

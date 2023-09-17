import jsEsm from "./configs/js-esm.mjs";
import { merge } from "./merge.mjs";

/**
 * @param {*} options
 * @return {import("eslint").Linter.FlatConfig[]}
 */
export async function build(options) {
  const { base, typescript, esm } = options;

  let baseConfig = {};
  let nodeEsm;
  if (base === "node18") {
    baseConfig = (await import("./configs/node18.mjs")).default;
    nodeEsm = (await import("./configs/node-esm.mjs")).default;
  } else if (base === "es2021") {
    baseConfig = (await import("./configs/es2021.mjs")).default;
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
      ...baseConfig,
      files: [cjsExtensions],
    },
    {
      ...merge(merge(baseConfig, jsEsm), nodeEsm),
      files: [esmExtensions],
    },
  ];
  if (tsConfig) {
    configArray.push(merge(merge(baseConfig, nodeEsm), tsConfig));
  }
  return configArray;
}

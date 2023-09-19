import jsEsm from "./configs/js-esm.mjs";
import { merge } from "./merge.mjs";

/**
 * @param {*} options
 * @return {Promise<import("eslint").Linter.FlatConfig[]>}
 */
export async function build(options) {
  const { base, typescript, esm } = options;

  const baseConfigNames = ["es2021", "es2022", "es2023", "node18", "node20"];
  if (!baseConfigNames.includes(base)) {
    throw new TypeError(`Unexpected base: ${base}`);
  }
  const baseConfig = (await import(`./configs/${base}.mjs`)).default;

  let nodeEsm = {};
  const nodeConfigNames = ["node18", "node20"];
  if (nodeConfigNames.includes(base)) {
    nodeEsm = (await import("./configs/node-esm.mjs")).default;
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
      ...merge(baseConfig, jsEsm, nodeEsm),
      files: [esmExtensions],
    },
  ];
  if (tsConfig) {
    configArray.push(merge(baseConfig, nodeEsm, tsConfig));
  }
  return configArray;
}

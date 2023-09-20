import jsEsm from "./configs/js-esm.mjs";
import { merge } from "./merge.mjs";

/**
 * @param {*} options
 * @return {Promise<import("eslint").Linter.FlatConfig[]>}
 */
export async function build(options) {
  const { base, typescript, project, esm } = options;

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
    if (project) {
      if (typeof project === "boolean" || typeof project === "string" || Array.isArray(project)) {
        tsConfig = (await import("./configs/typescript-type-checked.mjs")).default;
        tsConfig.languageOptions.parserOptions.project = project;
      } else {
        throw new TypeError(`project is unexpected: ${project}`);
      }
    } else {
      tsConfig = (await import("./configs/typescript.mjs")).default;
    }
  } else if (project) {
    throw new TypeError("Specify both `typescript` and `project`.");
  }

  let cjsExtensions = "**/*.{js,jsx,cjs}";
  let esmExtensions = "**/*.mjs";
  let cjsTsExtensions = "**/*.{ts,tsx,cts}";
  let esmTsExtensions = "**/*.mts";
  if (esm) {
    cjsExtensions = "**/*.cjs";
    esmExtensions = "**/*.{js,jsx,mjs}";
    cjsTsExtensions = "**/*.cts";
    esmTsExtensions = "**/*.{ts,tsx,mts}";
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
    configArray.push(
      {
        ...merge(baseConfig, tsConfig),
        files: [cjsTsExtensions],
      },
      {
        ...merge(baseConfig, nodeEsm, tsConfig),
        files: [esmTsExtensions],
      },
    );
  }
  return configArray;
}

import type { Linter } from "eslint";
import { jsEsm } from "./configs/js-esm.js";
import { merge } from "./merge.js";
import { nonNull } from "./utils.js";

interface BuildOptions {
  base: "es2021" | "es2022" | "es2023" | "node18" | "node20";
  esm?: boolean;
  typescript?: boolean;
  project?: boolean | string | string[];
}

export async function build(
  options: BuildOptions,
  ...additionalConfigs: Linter.Config[]
): Promise<Linter.Config[]> {
  const { base, typescript, project, esm } = options;

  const baseConfigNames = ["es2021", "es2022", "es2023", "node18", "node20"];
  if (!baseConfigNames.includes(base)) {
    throw new TypeError(`Unexpected base: ${base}`);
  }
  const baseConfig = (await import(`./configs/${base}.js`))[base];

  let nodeEsmConfig = {};
  const nodeConfigNames = ["node18", "node20"];
  if (nodeConfigNames.includes(base)) {
    const { nodeEsm } = await import("./configs/node-esm.js");
    nodeEsmConfig = nodeEsm;
  }

  let tsConfig;
  if (typescript) {
    if (project) {
      if (
        typeof project === "boolean" ||
        typeof project === "string" ||
        Array.isArray(project)
      ) {
        tsConfig = (await import("./configs/typescript-type-checked.js"))
          .typescriptTypeChecked;
        nonNull(nonNull(tsConfig.languageOptions).parserOptions).project =
          project;
      } else {
        throw new TypeError(`project is unexpected: ${project}`);
      }
    } else {
      tsConfig = (await import("./configs/typescript.js")).typescript;
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
      ...merge(baseConfig, jsEsm, nodeEsmConfig),
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
        ...merge(baseConfig, nodeEsmConfig, tsConfig),
        files: [esmTsExtensions],
      },
    );
  }
  configArray.push(...additionalConfigs);
  return configArray;
}

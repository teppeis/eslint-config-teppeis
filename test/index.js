"use strict";

const path = require("path");
const glob = require("glob");
const eslint = require("eslint");

const { ESLint } = eslint;
const generateTest = require("./lib/generateTest");

async function verify(
  configName,
  useModule = false,
  configFile = `${__dirname}/../${configName}.js`
) {
  const paths = glob.sync(`${__dirname}/fixtures/${configName}.*.@(js|ts)`);
  const options = {
    overrideConfigFile: configFile,
    ignore: false,
    reportUnusedDisableDirectives: "error",
    useEslintrc: false,
  };
  if (useModule) {
    options.parserOptions = {
      sourceType: "module",
    };
  }
  const engine = new ESLint(options);
  return engine.lintFiles(paths);
}

function describeVerify(configName, useModule = false, configFile) {
  if (configFile) {
    configFile = path.join(__dirname, configFile);
  }
  describe(configName, async () => {
    const results = await verify(configName, useModule, configFile);
    results.forEach((result) => generateTest(result));
  });
}

describe("eslint-config-teppeis", () => {
  describeVerify("es5");
  describeVerify("es2015", true);
  describeVerify("es2016", true);
  describeVerify("es2017", true);
  describeVerify("es2019", true);
  describeVerify("es5+closure", false, "fixtures/.closure.eslintrc.json");
  describeVerify("node-v12");
  // describeVerify("+prettier", false, "fixtures/.prettier.eslintrc.json");
  describeVerify("typescript", true, "fixtures/.typescript.eslintrc.json");
  describeVerify("typescript-with-type", true, "fixtures/.typescript-with-type.eslintrc.json");
});

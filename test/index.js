'use strict';

const glob = require('glob');
const eslint = require('eslint');

const CLIEngine = eslint.CLIEngine;
const generateTest = require('./lib/generateTest');

function verify(configName, useModule = false, configFile = configName) {
  const paths = glob.sync(`${__dirname}/fixtures/${configName}.*.js`);
  const options = {
    configFile: `${__dirname}/../${configFile}.js`,
    ignore: false,
    reportUnusedDisableDirectives: true,
  };
  if (useModule) {
    options.parserOptions = {
      sourceType: 'module',
    };
  }
  const engine = new CLIEngine(options);
  return engine.executeOnFiles(paths).results;
}

function describeVerify(configName, useModule = false) {
  describe(configName, () => {
    const results = verify(configName, useModule);
    results.forEach(result => generateTest(result));
  });
}

describe('eslint-config-teppeis', () => {
  describeVerify('es5');
  describeVerify('es2015', true);
  describeVerify('es2016', true);
  describeVerify('es2017', true);
  describeVerify('closure');
  describeVerify('closure-es2015', true);
  describeVerify('closure-es2016', true);
  describeVerify('closure-es2017', true);
  describeVerify('node-es2017', true);
  describeVerify('node-v6');
  describeVerify('node-v8');
  describeVerify('node-v10');
  describeVerify('prettier');
});

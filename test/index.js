'use strict';

const path = require('path');
const glob = require('glob');
const eslint = require('eslint');

const CLIEngine = eslint.CLIEngine;
const generateTest = require('./lib/generateTest');

function verify(configName, useModule = false, configFile = `${__dirname}/../${configName}.js`) {
  const paths = glob.sync(`${__dirname}/fixtures/${configName}.*.js`);
  const options = {
    configFile,
    ignore: false,
    reportUnusedDisableDirectives: true,
    useEslintrc: false,
  };
  if (useModule) {
    options.parserOptions = {
      sourceType: 'module',
    };
  }
  const engine = new CLIEngine(options);
  return engine.executeOnFiles(paths).results;
}

function describeVerify(configName, useModule = false, configFile) {
  describe(configName, () => {
    const results = verify(configName, useModule, configFile);
    results.forEach(result => generateTest(result));
  });
}

describe('eslint-config-teppeis', () => {
  describeVerify('es5');
  describeVerify('es2015', true);
  describeVerify('es2016', true);
  describeVerify('es2017', true);
  describeVerify('+closure', false, path.join(__dirname, 'fixtures/.closure.eslintrc.json'));
  describeVerify('node-v6');
  describeVerify('node-v8');
  describeVerify('node-v10');
  describeVerify('+prettier', false, path.join(__dirname, 'fixtures/.prettier.eslintrc.json'));
});

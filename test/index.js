'use strict';

const glob = require('glob');
const eslint = require('eslint');
const CLIEngine = eslint.CLIEngine;
const generateTest = require('./lib/generateTest');

function verify(configName, opt_useModule, opt_configFile) {
  const configFile = opt_configFile || configName;
  const paths = glob.sync(`${__dirname}/fixtures/${configName}.*.js`);
  const options = {
    configFile: `${__dirname}/../${configFile}.js`,
  };
  if (opt_useModule) {
    options.parserOptions = {
      sourceType: 'module'
    };
  }
  const engine = new CLIEngine(options);
  return engine.executeOnFiles(paths).results;
}

function describeVerify(configName, opt_useModule) {
  describe(configName, () => {
    const results = verify(configName, opt_useModule);
    results.forEach(result => generateTest(result));
  });
}

describe('eslint-config-teppeis', () => {
  describe('base', () => {
    const results = verify('base', false, 'index');
    results.forEach(result => generateTest(result));
  });

  describeVerify('es6', true);
  describeVerify('es2017', true);
  describeVerify('closure');
  describeVerify('closure-es6', true);
  describeVerify('node');
  describeVerify('node-es6', true);
  describeVerify('node-es2017', true);
  describeVerify('node-v4');
  describeVerify('node-v6');
});

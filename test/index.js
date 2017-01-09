'use strict';

const glob = require('glob');
const eslint = require('eslint');
const CLIEngine = eslint.CLIEngine;
const generateTest = require('./lib/generateTest');

function verify(configName, opt_configFile) {
  const configFile = opt_configFile || configName;
  const paths = glob.sync(`${__dirname}/fixtures/${configName}.*.js`);
  const engine = new CLIEngine({
    configFile: `${__dirname}/../${configFile}.js`
  });
  return engine.executeOnFiles(paths).results;
}

function describeVerify(configName) {
  describe(configName, () => {
    const results = verify(configName);
    results.forEach(result => generateTest(result));
  });
}

describe('eslint-config-teppeis', () => {
  describe('base', () => {
    const results = verify('base', 'index');
    results.forEach(result => generateTest(result));
  });

  describeVerify('es6');
  describeVerify('es2017');
  describeVerify('closure');
  describeVerify('closure-es6');
  describeVerify('node');
  describeVerify('node-es6');
  describeVerify('node-es2017');
  describeVerify('node-v4');
  describeVerify('node-v6');
});

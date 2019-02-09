'use strict';

const path = require('path');
const fs = require('fs');

function assertNoNestedDeps() {
  const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    return;
  }
  const dirs = new Set(fs.readdirSync(nodeModulesPath));
  if (isDev(dirs)) {
    return;
  }
  const pkg = require(path.join(__dirname, '..', 'package.json'));
  const peerDeps = Object.keys(pkg.peerDependencies);
  const nestedDeps = peerDeps.filter(dep => dirs.has(dep));
  if (nestedDeps.length) {
    throw new Error(
      `eslint-config-teppeis: Don't install ESLint plugin/config in your project root: ` +
        `${nestedDeps.join(', ')}`
    );
  }
}

function isDev(dirs) {
  return dirs.has('eslint');
}

module.exports = assertNoNestedDeps;

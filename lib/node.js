"use strict";

module.exports = {
  "plugins": ["node"],
  "env": {
    "node": true,
  },
  "rules": {
    // ignore this recommended rule in Node.js
    "no-console": 0,
    "node/no-deprecated-api": 2,
    "node/no-missing-import": 2,
    "node/no-missing-require": 2,
    "node/no-unpublished-bin": 2,
    "node/no-unpublished-import": 2,
    "node/no-unpublished-require": 2,
    "node/no-unsupported-features": 2,
    "node/shebang": 2
  }
};

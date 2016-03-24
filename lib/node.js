"use strict";

module.exports = {
  "plugins": ["node"],
  "env": {
    "node": true,
  },
  "rules": {
    "node/no-missing-import": 2,
    "node/no-missing-require": 2,
    "node/no-unpublished-import": 2,
    "node/no-unpublished-require": 2,
    "node/no-unsupported-features": [2, {"version": 0.12}],
    "node/shebang": 2
  }
};

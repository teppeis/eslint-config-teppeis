'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/test/**/*.js'],
      env: {
        mocha: true,
      },
      rules: {
        // allow `this.timeout(1000)`
        'no-invalid-this': 0,
      },
    },
  ],
};

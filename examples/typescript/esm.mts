import assert from 'assert';

export const assertOk = assert.ok;

// module-base
// eslint-disable-next-line import/no-self-import
import('./esm.mjs');

// module-globals
// `require` is not available in ESM
// eslint-disable-next-line no-restricted-globals
require('assert');

// module-globals
// `module.exports` is not available in ESM
// eslint-disable-next-line no-restricted-properties
module.exports = 1;

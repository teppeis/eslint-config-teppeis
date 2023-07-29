import assert from 'node:assert';

export const assertOk = assert.ok;

// module-base
// eslint-disable-next-line import/no-self-import
import('./esm.mjs');

// module-globals: unavailable in Node ESM
// eslint-disable-next-line no-restricted-globals
require('node:assert');
// eslint-disable-next-line no-restricted-globals
console.log(__filename);
// eslint-disable-next-line no-restricted-globals
exports.foo = 1;
// eslint-disable-next-line no-restricted-properties
module.exports = 1;

// module-js is not loaded, but tsc throws an error
// @ts-expect-error ts(2835) require extension
import('./index');

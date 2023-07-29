import assert from 'node:assert';

export const assertOk = assert.ok;

// module-base
// eslint-disable-next-line import/no-self-import
import('./index.js');

// module-globals
// eslint-disable-next-line no-undef, no-restricted-globals
require('node:assert');
// eslint-disable-next-line no-undef, no-restricted-globals
console.log(__filename);
// eslint-disable-next-line no-undef, no-restricted-globals
exports.foo = 1;
// eslint-disable-next-line no-restricted-properties
module.exports = 1;

// module-js
// A extension is required in ESM import specifire
// eslint-disable-next-line import/extensions
import('./esm');

import assert from 'node:assert';

export const assertOk = assert.ok;

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import('./cjs.cjs');

// module-globals is not loaded
require('node:assert');

console.log(__filename);
exports.foo = 1;
module.exports = 1;

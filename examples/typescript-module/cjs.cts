import assert from 'assert';

export const assertOk = assert.ok;

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import('./cjs.cjs');

// module-globals is not loaded
require('assert');

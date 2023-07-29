'use strict';

// module-globals is not loaded
require('node:assert');
console.log(__filename);
exports.foo = 1;
module.exports = 1;

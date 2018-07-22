'use strict';

// prefer-spread: on
const nums = [1, 2, 3, 4];
Math.max(...nums);

// prefer-rest-params: off
function noArguments(...args) {
  console.log(args);
}
noArguments();

// node-builtins
const assert = require('assert');
assert.equal(1, 1);
// es-syntax
const {a, b} = {a: 1, b: 2};
console.log(a, b);
// es-builtins
const util = require('util');
util.inspect.custom();

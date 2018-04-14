'use strict';

/* eslint-disable no-unused-vars */

const promisify = require('util').promisify;
const readFile = promisify(require('fs').readFile);

// prefer-spread: off
const nums = [1, 2, 3, 4];
Math.max.apply(Math, nums);

// prefer-rest-params: off
function noArguments() {
  console.log(arguments);
}
noArguments();

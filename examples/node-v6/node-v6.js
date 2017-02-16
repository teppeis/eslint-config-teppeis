'use strict';

/* eslint-disable no-magic-numbers */

// prefer-spread: on
let nums = [1, 2, 3, 4];
Math.max(...nums);

// prefer-rest-params: off
function noArguments(...args) {
  alert(args);
}
noArguments();

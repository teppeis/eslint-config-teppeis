'use strict';

// prefer-spread: on
let nums = [1, 2, 3, 4];
Math.max(...nums);

// prefer-rest-params: off
function noArguments(...args) {
  alert(args);
}
noArguments();

'use strict';

// prefer-spread: off
const nums = [1, 2, 3, 4];
Math.max.apply(Math, nums);

// prefer-rest-params: off
function noArguments() {
  alert(arguments);
}
noArguments();

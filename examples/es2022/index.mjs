/* eslint-disable no-unused-vars, no-undef */

// ES2022 new features
// eslint-disable-next-line prefer-object-has-own
Object.prototype.hasOwnProperty.call(obj, "a");
// -> Object.hasOwn(obj, "a");

// eslint-disable-next-line unicorn/prefer-at
const last = array[array.length - 1];
// -> const last = array.at(-1);

// check base config enabled
// eslint-disable-next-line no-compare-neg-zero
if (x === -0) {
  x.toString();
}

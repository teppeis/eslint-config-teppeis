/* eslint-disable no-unused-vars */

// ES2021: unicorn/numeric-separators-style
const num1 = 100000000; // onlyIfContainsSeparator: true
const num2 = 1_000; // number.minimumDigits: 0
const num3 = 10_000;

// ES2021: globals
new WeakRef();
new FinalizationRegistry();
new AggregateError();

// ES2017: comma-dangle
const foo = {
  bar: "baz",
  qux: "quux",
};

// base
const x = 0;
// eslint-disable-next-line no-compare-neg-zero
if (x === -0) {
  x.toString();
}

// eslint-plugin-jsdoc
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function bar(a, b) {
  return a + b;
}

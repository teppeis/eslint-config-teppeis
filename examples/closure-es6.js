/* eslint-disable no-unused-vars */

// don't use strict

// global `goog`
goog.foo();

// allow foo['bar']
goog['foo']();

// allow type casting
// TODO: add an option to allow only `foo = (foo)`
goog.n = /** @type {number} */ (goog.n);

// allow @typedef expression statement
/**
 * @typedef {number}
 */
goog.foo.bar;

// allow `var_args` and `opt_foo`
function foo1(var_args) {}
function foo2(opt_foo) {}

// allow @private `var foo_ = 0`
let foo_ = 0;

// allow both `{'foo': 1}` and `{foo: 1}`
let obj = {
  foo: 1,
  'bar': 2
};
/* eslint-enable no-unused-vars */

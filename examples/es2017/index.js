/* eslint-disable no-unused-vars, eslint-comments/disable-enable-pair */
'use strict';

// ES2017 new globals: SharedArrayBuffer
new SharedArrayBuffer(1024);

/* eslint-disable no-undef */
// ES2017 new syntax: async/await
let foo = async a => {
  await fetch(a);
};

async function wrap() {
  for (const value of list) {
    await doSomething(value);
  }
}

// comma-dangle
foo = {
  bar: 'baz',
  qux: 'quux',
};
foo = {bar: 'baz', qux: 'quux'};
foo = [1, 2];
foo = [1,
  2];
foo = [
  1,
  2,
];
console.log('baz', 'quux');
console.log(
  'baz',
  'quux',
);
function paramsComma1(a, b) {}
function paramsComma2(
  a,
  b,
) {}

// unicorn/prefer-includes
[].includes('foo');

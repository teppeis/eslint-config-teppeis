'use strict';

// new globals in Node v12.0.0
new TextDecoder('shift_jis');
new TextEncoder();

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);
Object.fromEntries(entries);

'use strict';

// node-builtins: URL and URLSearchParams
new URL('https://example.com/');
new URLSearchParams();
// es-syntax: regex named capture
const match = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/.exec('2018-04-10');
console.log(match);
// es-builtins: Atomics and SharedArrayBuffer
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
Atomics.add(ta, 0, 12);

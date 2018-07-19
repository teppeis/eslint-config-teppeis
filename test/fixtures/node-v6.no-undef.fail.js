'use strict';

const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
Atomics.add(ta, 0, 12);

/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Foo} from './mod';
import {Baz, Bar} from './mod';

// no-unnecessary-type-assertion
const n1 = 3;
const n2 = n1!;
console.log(n2);
const foo: Foo = {};
new Bar();
new Baz();

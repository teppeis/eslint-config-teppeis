/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Foo} from './mod';
import {Bar, Baz} from './mod';
import Bar2 = require('./mod2');

// no-unnecessary-type-assertion
const n1 = 3;
const foo: Foo = {};
new Bar();
new Baz();

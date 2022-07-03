import type {Foo} from './mod';
import {Bar, Baz} from './mod';
import Bar2 = require('./mod2');

type Three = 3;
// A recommended rule
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const three = <Three>3;

const foo: Foo = {
  foo: '',
};
new Bar();
new Baz();
new Bar2.Bar();
console.log(three, foo);

// module-base is loaded
// eslint-disable-next-line import/no-self-import
import('./index');

// module-globals is not loaded
require('assert');

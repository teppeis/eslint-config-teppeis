'use strict';

require('eslint-plugin-node');
require('./node-es2017');
// require('./missing');

function Foo() {}

exports.obj = {
  Foo: Foo,
};

console.log('foo');

exports.Foo = Foo;

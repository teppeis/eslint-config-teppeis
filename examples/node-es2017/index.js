'use strict';

require('eslint-plugin-import');
require('./');
// require('./missing');

function Foo() {}

exports.obj = {
  Foo: Foo,
};

console.log('foo');

exports.Foo = Foo;

'use strict';

require('eslint-plugin-node');
require('./node');
// require('./missing');

function Foo() {}

exports.obj = {
  Foo: Foo
};

exports.Foo = Foo;

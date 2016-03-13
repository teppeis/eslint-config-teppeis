'use strict';

require('extend');
require('./node');
// require('./missing');

function Foo() {}

exports.obj = {
  Foo: Foo
};

exports.Foo = Foo;

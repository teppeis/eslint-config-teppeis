'use strict';

require('extend');
require('./node');
// require('./missing');

class Foo {
  constructor(foo) {
    this.foo = foo;
  }

  hello(name) {
    return `Hello, ${name}`;
  }

  invoke(param, cb) {
    cb(param);
  }

  call() {
    this.invoke(param => {
      alert(param);
    });
  }

  confusingArrow() {
    return n => (n * Math.random() > 0.5 ? 1 : 2);
  }
}

exports.obj = {
  foo() {},
  // allow properties
  Foo: Foo
};

exports.Foo = Foo;

'use strict';

/* eslint-disable no-magic-numbers */

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

  namedCall() {
    this.invoke(function foo(param) {
      alert(param);
    });
  }

  env() {
    return Promise.resolve(1);
  }

  confusingArrow() {
    return n => (n * Math.random() > 0.5 ? 1 : 2);
  }

  static [Symbol.hasInstance](obj) {
    return obj.constructor === Foo;
  }
}

exports.obj = {
  1: 'b',
  foo() {},
  // allow properties
  Foo: Foo
};

exports.Foo = Foo;

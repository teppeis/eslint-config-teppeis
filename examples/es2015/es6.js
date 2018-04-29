/* eslint-disable no-unused-vars */
'use strict';

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
    this.invoke(param => param);
  }

  namedCall() {
    this.invoke(function foo(param) {
      return param;
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

const obj = {
  1: 'b',
  foo() {},
  // allow properties
  Foo: Foo,
};

// object-shorthand
const foo = {
  foo(bar, baz) {
    const piyo = bar + baz;
    piyo();
  },
};

// template-tab-spacing
function tag() {}
foo.foo(tag`hello`);

// https://eslint.org/docs/rules/generator-star-spacing
function* generator() {}
const anonymous = function*() {
  yield* generator();
};
const method = {
  *generator() {},
};

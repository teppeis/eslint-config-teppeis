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

// object-shorthand: properties
const obj = {
  1: 'b',
  foo() {},
  // allow properties
  Foo: Foo,
};

// object-shorthand: methods
const foo = {
  // prefer method shorthand to `function()`
  foo(bar, baz) {
    const piyo = bar + baz;
    return piyo();
  },
  // allow arrow functions
  bar: (bar, baz) => {
    const piyo = bar + baz;
    return piyo();
  },
  bar2: (bar, baz) => {
    const piyo = bar + baz;
    piyo();
  },
  baz: (bar, baz) => bar + baz,
};

// template-tab-spacing
function tag() {}
foo.foo(tag`hello`);
// no-unused-expressions: allowTaggedTemplates: true
tag`hello`;

// https://eslint.org/docs/rules/generator-star-spacing
function* generator() {}
const anonymous = function*() {
  yield* generator();
};
const method = {
  *generator() {},
};

// no-misleading-character-class
const a = /^[abc]$/;
const b = /^[👍]$/u;

// unicorn/prefer-starts-ends-with
foo.startsWith('bar');

// prefer-spread: disable
const args = [];
foo.apply(undefined, args);

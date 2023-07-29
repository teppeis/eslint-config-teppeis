'use strict';

const assert = require('node:assert');

describe('foo', () => {
  it('bar', () => {
    assert(true);
  });
  it('baz', function() {
    // https://eslint.org/docs/rules/no-invalid-this
    this.timeout(5000);
  });
});

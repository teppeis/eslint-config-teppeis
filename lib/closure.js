'use strict';

module.exports = {
  globals: {
    goog: true,
    setUp: true,
    tearDown: true,
    assertNotNull: true,
    assertTrue: true,
    assertNotEquals: true,
    assertEquals: true,
  },
  env: {
    browser: true,
  },
  rules: {
    // dot at tail of a line
    'dot-location': [2, 'object'],
    // allow foo["bar"]
    'dot-notation': 0,
    // allow type casting
    // TODO: add an option to allow only `foo = (foo)`
    'no-self-assign': 0,
    // allow @typedef expression statement
    'no-unused-expressions': 0,
    // allow `var_args` and `opt_foo`
    camelcase: 0,
    'id-match': [2, '^(?:var_args|(?:opt_)?[a-zA-Z0-9]+_?|[_A-Z0-9]+)$'],
    // allow @private `var foo_ = 0`
    'no-underscore-dangle': 0,
    // don't use strict
    strict: [2, 'never'],
    // allow both `{"foo": 1}` and `{foo: 1}`
    'quote-props': 0,
  },
};

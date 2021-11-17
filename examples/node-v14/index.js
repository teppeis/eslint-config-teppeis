/* eslint-disable no-undef, no-unused-vars */
'use strict';

// https://github.com/teppeis/eslint-config-teppeis/issues/415#issuecomment-684900779

// ES2020 optional chaining
const nestedProp = obj?.first?.second;

// assert.CallTracker was added in v14.2.0
const assert = require('assert');
new assert.CallTracker();

// ES2022 Class fields
class C {
  // Public instance and static fields (Node v12.0+)
  static foo;

  // Private class fields (Node v14.6+)
  #x = 'x';
}

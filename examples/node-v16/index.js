/* eslint-disable no-unused-vars */
'use strict';

// ES2022 Class fields
class C {
  // Public instance and static fields (Node v12.0+)
  static foo;

  // Private class fields (Node v14.6+)
  #x = 'x';
  static check(obj) {
    // Ergonomic brand checks (Node v16.4+)
    return #x in obj;
  }
  static {
    // Static initialization blocks (Node v16.11+)
    C.foo = 2;
  }
}

// .at() method on the built-in indexables (Node v16.6+)
// https://node.green/#ES2022-features--at---method-on-the-built-in-indexables
[0, 1, 2].at(2);

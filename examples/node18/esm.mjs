/* eslint-disable no-unused-vars */
import fs from "node:fs";

// eslint-disable-next-line n/no-deprecated-api
fs.exists("./foo", () => {});

// eslint-disable-next-line unicorn/prefer-module
require("node:assert/strict");

// ES2022 new syntax: class fields
class C {
  // Public instance and static fields (Node v12.0+)
  static foo;

  // Private class fields (Node v14.6+)
  #x = "x";
  static check(obj) {
    // Ergonomic brand checks (Node v16.4+)
    return #x in obj;
  }
  static {
    // Static initialization blocks (Node v16.11+)
    C.foo = 2;
  }
}

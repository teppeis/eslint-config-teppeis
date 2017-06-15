'use strict';

/* eslint-disable no-unused-vars, no-undef */

// async/await
const foo = async a => {
  await fetch(a);
};

async function wrap() {
  for (const value of list) {
    await doSomething(value);
  }
}

// comma-dangle for "functions"
function comma(
  a,
  b,
) {}

comma(
  1,
  2,
);

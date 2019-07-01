/* eslint-disable no-unused-vars, no-undef */
'use strict';

/**
 * Sets multiple properties on a node.
 * @param {Element} element DOM node to set properties on.
 * @param {Object} properties Hash of property:value pairs.
 * @param {boolean|string|number|null|undefined} a
 * @return {null}
 */
function setProperties(element, properties, a) {
  Object.keys(properties).forEach(function(key) {
    var val = properties[key];
    if (key === 'style') {
      element.style.cssText = val;
    } else if (key === 'class') {
      element.className = val;
    } else if (key === 'for') {
      element.htmlFor = val;
    } else {
      element[key] = val;
    }
  });
  return null;
}

setProperties();

/**
 * @constructor
 */
function foo() {}

/**
 */
function noparam(a, b) {}

// comma-dangle
var foo2 = {
  bar: 'baz',
  qux: 'quux',
};
foo2 = {bar: 'baz', qux: 'quux'};
foo2 = [1, 2];
foo2 = [1,
  2];
foo2 = [
  1,
  2,
];
console.log('baz', 'quux');
console.log(
  'baz',
  'quux'
);
function paramsComma1(a, b) {}
function paramsComma2(
  a,
  b
) {}

// eslint-plugin-unicorn
var s = '\u001B';

// eslint-plugin-jsdoc
/**
 * "jsdoc/check-types": [2, { unifyParentAndChildTypeChecks: true }]
 * @param {Object<Object<Array<string[]>>>} foo
 * @return {bbbb}
 */
function quux(foo) {
  return 1;
}

/**
 * @type {Array<string>}
 */
var nonFunction;

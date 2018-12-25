/* eslint-disable no-unused-vars */
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

// unicorn
var s = '\u001B';

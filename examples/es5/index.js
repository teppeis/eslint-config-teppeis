/* eslint-disable no-unused-vars */
'use strict';

/**
 * Sets multiple properties on a node.
 * @param {Element} element DOM node to set properties on.
 * @param {Object} properties Hash of property:value pairs.
 */
function setProperties(element, properties) {
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
}

setProperties();

// unicorn
var s = '\u001B';

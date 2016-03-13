'use strict';

/**
 * Returns the first element with the provided className.
 * @see {goog.dom.query}
 * @param {string} className the name of the class to look for.
 * @param {Element|Document=} opt_el Optional element to look in.
 * @return {Element} The first item with the class name provided.
 */
function getElementByClass(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if (parent.getElementsByClassName) {
    retVal = parent.getElementsByClassName(className)[0];
  } else if (canUseQuerySelector_(parent)) {
    retVal = parent.querySelector('.' + className);
  }
  return retVal || null;
}


/**
 * Prefer the standardized (http://www.w3.org/TR/selectors-api/), native and
 * fast W3C Selectors API.
 * @param {!(Element|Document)} parent The parent document object.
 * @return {boolean} whether or not we can use parent.querySelector* APIs.
 * @private
 */
function canUseQuerySelector_(parent) {
  return !!(parent.querySelectorAll && parent.querySelector);
}

/**
 * Sets multiple properties on a node.
 * @param {Element} element DOM node to set properties on.
 * @param {Object} properties Hash of property:value pairs.
 */
function setProperties(element, properties) {
  /* eslint-disable no-param-reassign */
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
  /* eslint-enable no-param-reassign */
}

exports.getElementByClass = getElementByClass;
exports.setProperties = setProperties;

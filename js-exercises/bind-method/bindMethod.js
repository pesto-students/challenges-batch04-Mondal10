/**
 * Custom Bind method that return a new function with new dynamic context.
 *
 * @param {Function} fn
 * @param {Object} obj
 */
function bind(fn, obj) {
  return fn.bind(obj);
}

module.exports = { bind };

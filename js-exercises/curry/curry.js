/**
 * Currying function used to transform f(a,b,c) to f(a)(b)(c)
 *
 * @param {Function} fn
 *
 * @returns {Number | String}
 */
function curry(fn) {
  return function curried(...args) {
    // If passed args count is the same as the original function then call it
    if (args.length >= fn.length) return fn.apply(this, args);

    return function wrapper(...args2) {
      // recursively call the curried function till it matches the original function args
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

export {
  curry,
};

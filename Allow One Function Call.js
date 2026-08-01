/**
 * @param {Function} fn
 * @return {Function}
 */

// Runtime
// 46 ms
// Beats 45.42%

var once = function (fn) {
  let once = true;
  return function (...args) {
    if (once) {
      once = false;
      return fn(...args);
    }
    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

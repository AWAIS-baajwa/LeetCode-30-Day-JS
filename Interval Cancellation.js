/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// Runtime
// 58  ms
// Beats  52.69%

var cancellable = function (fn, args, t) {
  let val = fn(...args);
  let increasingInterval = t;
  let interval = setInterval(() => {
    val = fn(...args);
    increasingInterval = increasingInterval + t;
  }, t);
  return function () {
    clearInterval(interval);
  };
};

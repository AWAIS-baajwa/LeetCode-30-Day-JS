/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// Runtime
// 58  ms
// Beats  47.89%

var cancellable = function (fn, args, t) {
  let cancel = setTimeout(() => {
    let val = fn(...args);
    return [{ time: t, returned: val }];
  }, t);
  return function () {
    clearTimeout(cancel);
  };
};

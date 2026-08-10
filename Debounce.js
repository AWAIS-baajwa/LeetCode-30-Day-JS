/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
// Runtime
// 50  ms
// Beats  55.63%

var debounce = function (fn, t) {
  let cancelCallOut;
  return function (...args) {
    clearTimeout(cancelCallOut);

    cancelCallOut = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

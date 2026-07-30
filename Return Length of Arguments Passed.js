/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

// Runtime
// 52 ms
// Beats 11.26%

var argumentsLength = function (...args) {
  return args.length;
};

/**
 * @param {Function} fn
 * @return {Object}
 */

// Runtime
// 113  ms
// Beats  36.37%
Array.prototype.groupBy = function (fn) {
  let result = {};
  for (let i = 0; i < this.length; i++) {
    let item = fn(this[i]);

    if (Object.hasOwn(result, item)) {
      result[item].push(this[i]);
    } else {
      result[item] = [this[i]];
    }
  }
  return result;
};

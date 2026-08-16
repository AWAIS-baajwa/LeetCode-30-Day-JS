/**
 * @return {null|boolean|number|string|Array|Object}
 */

// Runtime
// 48  ms
// Beats  23.09%
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

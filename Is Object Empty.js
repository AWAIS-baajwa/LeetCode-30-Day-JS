/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

// Runtime
// 34  ms
// Beats  93.59%

var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return true;
    return false;
  } else if (Object.keys(obj).length === 0) return true;
  return false;
};

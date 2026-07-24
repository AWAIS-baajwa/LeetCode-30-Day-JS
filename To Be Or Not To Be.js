/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (next) {
      if (val === next) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (next) {
      if (val !== next) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

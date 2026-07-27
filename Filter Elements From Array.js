/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Runtime
// 38 ms
// Beats 84.36%

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}
var filter = function (arr, fn) {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    var val = fn(arr[i], i);
    if (val) {
      newArr[count] = arr[i];
      count++;
    }
  }
  return newArr;
};

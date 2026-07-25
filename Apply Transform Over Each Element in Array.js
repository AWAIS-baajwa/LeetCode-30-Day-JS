/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Runtime
// 32 ms
// Beats 96.91%

var fn = function plusone(n) {
  return ++n;
};
function plusI(n, i) {
  return n + i;
}
function constant() {
  return 42;
}
var map = function (arr, fn) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    var val = fn(arr[i]);
    newArr[i] = val;
  }
  return newArr;
};
var map = function (arr, plusI) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    var val = plusI(arr[i], i);
    newArr[i] = val;
  }
  return newArr;
};

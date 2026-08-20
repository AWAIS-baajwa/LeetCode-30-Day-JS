/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let count;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(arr[j])) {
        count = arr[j].length;
        arr.splice(j, 1, ...arr[j]);
        j = j + count - 1;
      } else if (!(i > 0)) {
        arr.splice(j, 1, arr[j]);
      }
    }
  }
  return arr;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1),
);
console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2,
  ),
);

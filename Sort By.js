/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
//  It passed 35/36 test cases and failed the last due time limit
// var sortBy = function (arr, fn) {
//   let sortedArray = [],
//     j,
//     sortedArrayLength;
//   for (let i = 0; i < arr.length; i++) {
//     sortedArrayLength = sortedArray.length;
//     let item = fn(arr[i]);
//     if (sortedArrayLength == 0) {
//       sortedArray.push(arr[i]);
//     } else {
//       for (j = 0; j < sortedArrayLength; j++) {
//         if (item < fn(sortedArray[j])) {
//           sortedArray.splice(j, 0, arr[i]);
//           break;
//         }
//       }
//       if (j == sortedArrayLength) {
//         sortedArray.push(arr[i]);
//       }
//     }
//   }
//   return sortedArray;
// };
// console.log(
//   sortBy(
//     [
//       [5, 4],
//       [10, 0],
//       [6, 7],
//       [15, 1],
//     ],
//     (x) => x[0] + x[1],
//   ),
// );
// console.log(sortBy([5, 4, 1, 2, 3], (fn = (x) => x)));
// console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (fn = (d) => d.x)));
// console.log(
//   sortBy(
//     [
//       [3, 4],
//       [5, 2],
//       [10, 1],
//     ],
//     (fn = (x) => x[1]),
//   ),
// );

// It passes all test cases
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

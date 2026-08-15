/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// Runtime
// 47  ms
// Beats  55.29%

var chunk = function (arr, size) {
  if (arr.length === 0) return [];
  else {
    let result = [];
    let start = 0;
    let arrayLength = arr.length;

    if (size === 1) {
      for (let i = size; i <= arrayLength; i++) {
        result.push(arr.slice(start, i));
        start++;
      }
      return result;
    }
    if (arrayLength % size === 0) {
      for (let i = size; i <= arrayLength; i = i + size) {
        result.push(arr.slice(start, i));
        start = size + start;
      }
    } else {
      for (let i = size; i < arrayLength; i = i + size) {
        result.push(arr.slice(start, i));
        start = size + start;
      }
      result.push(arr.slice(arrayLength - (arrayLength % size)));
    }
    return result;
  }
};
// chunk([8, 42, 7, 83, 7, 8324, 37, 7523, 47, 43, 6], 4);

let data = [
  31, 59, 24, 38, 74, 19, 76, 73, 98, 30, 52, 82, 75, 42, 37, 17, 48, 47, 76,
  22, 92, 37, 74, 29, 71, 83, 70, 26, 20, 54, 83, 54, 93, 33, 2, 58, 22, 36, 50,
  82, 87, 72, 43, 30, 74, 67, 86, 27, 64, 85, 11, 80, 46, 24, 30, 8, 88, 23, 30,
  87, 83, 87, 92, 65, 2, 84, 26, 89, 99, 88, 64, 48, 66, 7, 67, 40, 1, 46, 21,
  27, 57, 54, 17, 23, 65, 11, 5, 63, 31, 60, 40, 82, 78, 78, 13, 42, 12, 98, 41,
];
console.log(chunk(data, 25));

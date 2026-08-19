/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// So in this problem i have multiple solution due to "Time Limit Exceed"
// First Solution passed 32/42 test cases
// var join = function (arr1, arr2) {
//   let result = [];
//   let j;
//   for (let i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//       if (arr1[i].id === arr2[j].id) {
//         result.push({ ...arr1[i], ...arr2[j] });
//         break;
//       }
//     }
//     if (j === arr2.length) {
//       result.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     let m;
//     for (m = 0; m < result.length; m++) {
//       if (arr2[i].id === result[m].id) break;
//     }
//     if (m === result.length) {
//       result.push(arr2[i]);
//     }
//   }
//   return result.sort((a, b) => a.id - b.id);
// };

// console.log(
//   join(
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//   ),
// );
// console.log(
//   join(
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [{ id: 1, b: { c: 84 }, v: [1, 3] }],
//   ),
// );
// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }],
//   ),
// );
//////////////////////////////////////////////////////////////////////////////
// 2nd Solution after optimization passed 39/42 test cases
// var join = function (arr1, arr2) {
//   let result = [];
//   let j;
//   let flag;
//   for (let i = 0; i < arr1.length; i++) {
//     flag = true;
//     for (j = 0; j < arr2.length; j++) {
//       if (arr1[i].id == arr2[j].id) {
//         result.push({ ...arr1[i], ...arr2[j] });
//         flag = false;
//         arr2.splice(j, 1);
//         break;
//       }
//     }
//     if (flag) {
//       result.push(arr1[i]);
//     }
//   }
//   result.push(...arr2);
//   return result.sort((a, b) => a.id - b.id);
// };
// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//   ),
// );
///////////////////////////////////////////////////////////////////
// 3rd solution which is passes all the test cases
var join = function (arr1, arr2) {
  let map = new Map();
  for (let obj of arr1) {
    map.set(obj.id, { ...obj });
  }
  for (let obj of arr2) {
    if (map.has(obj.id)) {
      Object.assign(map.get(obj.id), obj);
    } else {
      map.set(obj.id, obj);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

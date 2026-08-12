/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// Runtime
// 64  ms
// Beats  50.94%

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((data) => {
          result[i] = data;
          count++;
          if (count === functions.length) resolve(result);
        })
        .catch((error) => {
          reject("Error");
        });
    }
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
]);

promise.then((data) => console.log(data)).catch((error) => console.log(error));

// promiseAll([
//   () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
//   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
// ])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

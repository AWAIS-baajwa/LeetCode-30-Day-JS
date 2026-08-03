/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// Runtime
// 50 ms
// Beats 74.38%
var addTwoPromises = async function (promise1, promise2) {
  let promiseOneResult = await promise1;
  let promiseTwoResult = await promise2;

  return new Promise(
    (resolve) => setTimeout(() => resolve(promiseOneResult + promiseTwoResult)),
    80,
  );
};

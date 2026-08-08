/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// Runtime
// 58  ms
// Beats  17.48%

var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      let cancel = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((res) => {
          clearTimeout(cancel);
          resolve(res);
        })
        .catch((error) => {
          reject(Error);
        });
    });
  };
};

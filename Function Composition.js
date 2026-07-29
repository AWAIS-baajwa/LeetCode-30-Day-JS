/**
 * @param {Function[]} functions
 * @return {Function}
 */

// Runtime
// 51 ms
// Beats  77.72%

var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let result = functions[functions.length - 1](x);
    for (let i = functions.length - 2; i > -1; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
const fn = compose([]);
// fn(4);
console.log(fn(4));

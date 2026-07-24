var createCounter = function (init) {
  var save = init;
  return {
    increment: function () {
      return ++init;
    },
    reset: function () {
      return (init = save);
    },
    decrement: function () {
      return --init;
    },
  };
};

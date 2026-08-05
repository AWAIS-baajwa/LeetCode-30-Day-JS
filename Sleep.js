// Runtime
// 41 ms
// Beats  75.65%

async function sleep(millis) {
  return new Promise((resole) =>
    setTimeout(() => {
      resole();
    }, millis),
  );
}

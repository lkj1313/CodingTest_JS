const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Limit = 10000;

const generated = new Array(Limit + 1).fill(false);

function d(n) {
  return (
    n +
    String(n)
      .split("")
      .reduce((a, b) => a + Number(b), 0)
  );
}

for (let i = 1; i <= Limit; i++) {
  const dn = d(i);
  if (dn <= Limit) {
    generated[dn] = true;
  }
}

for (let i = 1; i <= Limit; i++) {
  if (generated[i] === false) {
    console.log(i);
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];

const arr = input.slice(1);

const uniquedArr = [...new Set(arr)];

uniquedArr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b);
  }
});

console.log(uniquedArr.join("\n"));

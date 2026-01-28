const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1).filter((word) => word.length >= M);

const map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

const newMap = [...map]; // [key, value][]

newMap.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }
  if (a[0].length !== b[0].length) {
    return b[0].length - a[0].length;
  }
  return a[0].localeCompare(b[0]);
});

const answerArr = [];

for (const [word, value] of newMap) {
  answerArr.push(word);
}

console.log(answerArr.join("\n"));

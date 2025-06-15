const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const Narray = input.slice(1, N + 1).map(Number);
const Marray = input.slice(N + 1).map(Number);

Narray.sort((a, b) => a - b);

function lowerBound(target) {
  let left = 0;
  let right = N;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (Narray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return Narray[left] === target ? left : -1;
}

let result = "";
for (let i = 0; i < M; i++) {
  result += lowerBound(Marray[i]) + "\n";
}
console.log(result.trim());

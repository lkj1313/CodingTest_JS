const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
let i = 0;
const result = [];

while (true) {
  const [N, M] = input[i].split(" ").map(Number);
  if (N === 0 && M === 0) break;

  const Narr = input.slice(i + 1, i + 1 + N).map(Number); // 상근
  const Marr = input.slice(i + 1 + N, i + 1 + N + M).map(Number); // 선영

  // 이분 탐색 함수
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return true;
      else if (arr[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return false;
  }

  Narr.sort((a, b) => a - b);

  let count = 0;
  for (let j = 0; j < M; j++) {
    if (binarySearch(Narr, Marr[j])) {
      count++;
    }
  }

  result.push(count);
  i += 1 + N + M;
}

console.log(result.join("\n"));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const nums = input[1].split(" ").map(Number);

const freqMap = new Map(); // 숫자 → 등장 횟수
const firstIndexMap = new Map(); // 숫자 → 첫 등장 인덱스

nums.forEach((num, idx) => {
  if (!freqMap.has(num)) {
    freqMap.set(num, 1);
    firstIndexMap.set(num, idx);
  } else {
    freqMap.set(num, freqMap.get(num) + 1);
  }
});

const sorted = [...nums].sort((a, b) => {
  const freqA = freqMap.get(a);
  const freqB = freqMap.get(b);

  if (freqA !== freqB) {
    return freqB - freqA; // 빈도 높은 순
  }
  return firstIndexMap.get(a) - firstIndexMap.get(b); // 먼저 등장한 순
});

console.log(sorted.join(" "));

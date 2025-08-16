const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

// 평균(반올림) + -0 방지
let avg = Math.round(arr.reduce((a, b) => a + b, 0) / N);
if (avg === 0) avg = 0;

// 중앙값 (N은 홀수)
const median = arr[Math.floor(N / 2)];

// 빈도수 집계
const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x) ?? 0) + 1);

// 최빈값 
const maxFreq = Math.max(...freq.values());
const candidates = [...freq.entries()]
  .filter(([, c]) => c === maxFreq)
  .map(([k]) => k)
  .sort((a, b) => a - b);

const mode = candidates.length >= 2 ? candidates[1] : candidates[0];

// 범위
const range = arr[arr.length - 1] - arr[0];

// 출력
console.log(avg);
console.log(median);
console.log(mode);
console.log(range);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

// 산술평균 (반올림, -0 방지)
const sum = numbers.reduce((a, b) => a + b, 0);
let avg = Math.round(sum / N);
if (avg === -0) avg = 0;

// 중앙값
const sorted = [...numbers].sort((a, b) => a - b);
const median = sorted[Math.floor(N / 2)];

// 최빈값
const count = {};
for (const num of numbers) {
  count[num] = (count[num] || 0) + 1;
}

const freqArr = Object.entries(count)
  .map(([k, v]) => [Number(k), v])
  .sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0]; // 빈도 같으면 숫자 오름차순
    return b[1] - a[1]; // 빈도순 내림차순
  });

const mode =
  freqArr.length > 1 && freqArr[0][1] === freqArr[1][1]
    ? freqArr[1][0]
    : freqArr[0][0];

// 범위
const range = sorted[N - 1] - sorted[0];

// 출력
console.log(avg);
console.log(median);
console.log(mode);
console.log(range);

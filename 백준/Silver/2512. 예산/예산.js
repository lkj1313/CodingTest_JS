const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const arr = input[1].split(" ").map(Number);

const budget = Number(input[2]);

arr.sort((a, b) => a - b);

function binarySearch() {
  let start = 0;
  let end = arr[N - 1];
  let result = 0;
  while (start <= end) {
    let sum = 0;
    let mid = Math.floor((start + end) / 2); // 상한액
    for (let x of arr) {
      sum += Math.min(mid, x);
    }
    if (sum === budget) {
      return mid;
    } else if (sum > budget) {
      end = mid - 1;
    } else if (sum < budget) {
      start = mid + 1;
      result = mid;
    }
  }
  return result;
}

console.log(binarySearch());

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function binarySearch() {
  let low = 0;
  let high = Math.max(...trees);

  let answer = 0;

  while (low <= high) {
    let total = 0;
    let mid = Math.floor((low + high) / 2);
    function totalFunc(arr, mid) {
      // 짤린 나무들의 길이 합
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mid) {
          total += arr[i] - mid;
        }
      }
    }
    totalFunc(trees, mid);
    if (total === M) {
      return mid;
    } else if (total > M) {
      answer = mid;
      low = mid + 1;
    } else if (total < M) {
      high = mid - 1;
    }
  }
  return answer;
}

console.log(binarySearch());

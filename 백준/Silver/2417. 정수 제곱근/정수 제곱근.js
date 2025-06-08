const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const N = BigInt(input);

function sqrt(n) {
  let left = 1n;
  let right = N;
  let answer = 0n;
  while (left <= right) {
    let mid = (left + right) / 2n;
    let squart = mid * mid;

    if (squart === n) {
      return mid;
    } else if (n < squart) {
      right = mid - 1n;
      answer = mid;
    } else if (n > squart) {
      left = mid + 1n;
    }
  }
  return answer;
}

console.log(sqrt(N).toString());

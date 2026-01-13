const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const soldiers = input[1].split(" ").map(Number);

soldiers.reverse(); //// [1,2,3,4]

const lis = [];

function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] >= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

for (const s of soldiers) {
  if (lis.length === 0 || lis[lis.length - 1] < s) {
    lis.push(s);
  } else {
    const index = lowerBound(lis, s);
    lis[index] = s;
  }
}

console.log(N - lis.length);

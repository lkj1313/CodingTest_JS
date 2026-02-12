const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

/// t>=x t=떡밥의개수 떡밥의개수보다 작거나같은 먹성의 물고기중 가장 큰 물고기가유인

const n = +input[0]; /// 물고기수
const c = +input[1]; // 떡밥 한개의 가격

//[먹성,크기,가격][]
const fishArr = input.slice(2).map((line) => line.split(" ").map(Number));

fishArr.sort((a, b) => b[1] - a[1]);

const totalAppetite = fishArr.reduce((acc, cur) => acc + cur[0], 0); // 먹성의 총합
let maxProfit = 0;
for (let i = 1; i <= totalAppetite; i++) {
  let currentI = i; // 남은 떡밥의개수
  let currentProfit = 0;
  const used = new Array(n).fill(false);

  while (true) {
    let found = false;
    for (let k = 0; k < n; k++) {
      if (!used[k] && currentI >= fishArr[k][0]) {
        currentI -= fishArr[k][0];
        currentProfit += fishArr[k][2];
        used[k] = true;
        found = true;
        break;
      }
    }
    if (!found) break;
  }
  const profit = currentProfit - i * c;
  maxProfit = Math.max(profit, maxProfit);
}

console.log(maxProfit);

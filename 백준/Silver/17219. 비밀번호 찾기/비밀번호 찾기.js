const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const sites = input.slice(1, N + 1).map((site) => site.split(" ")); // 사이트주소 모든 배열 [[],[]]
const search = input.slice(N + 1); // 찾는사이트주소배열

const map = new Map();

for (const [site, password] of sites) {
  map.set(site, password);
}
let answer = [];
for (let i = 0; i < search.length; i++) {
  answer.push(map.get(search[i]));
}

for (i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

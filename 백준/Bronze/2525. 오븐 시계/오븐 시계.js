const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [H, M] = input[0].split(" ").map(Number);
let C = +input[1];

M += C;

if (M >= 60) {
  H += Math.floor(M / 60);
  M = M % 60;

}
if (H >= 24) {
  H = H % 24;
}

console.log(`${H} ${M}`);

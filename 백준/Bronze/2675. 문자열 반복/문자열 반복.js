const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = +input[0]; // 테스트케이스개수

for (let i = 1; i <= N; i++) {
  const [R, S] = input[i].split(" "); // R : 반복횟수, S: 문자열
  const repeatNum = +R;

  let result = "";
  for (let char of S) {
    result += char.repeat(repeatNum); // 각 문자를 반복 횟수만큼 반복
  }
  console.log(result);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//1차원 배열

// 각 줄의 최대 길이 계산
let maxLength = Math.max(...input.map((line) => line.length));
let answer = [];

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) {
      // 해당 인덱스에 문자가 존재하는 경우에만 추가
      answer.push(input[j][i]);
    }
  }
}

console.log(answer.join(""));

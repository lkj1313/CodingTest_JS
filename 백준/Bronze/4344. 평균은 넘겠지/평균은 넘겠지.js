const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const C = Number(input[0]); // 테스트 케이스 개수
const answer = [];

for (let i = 1; i <= C; i++) {
  const row = input[i].split(" ").map(Number);
  
  const n = row[0]; // 해당 케이스의 학생 수 (첫 번째 값)
  const scores = row.slice(1); // 첫 번째 값을 제외한 나머지 점수들만 복사
  
  const sum = scores.reduce((a, b) => a + b, 0);
  const avg = sum / n; // 진짜 점수 평균

  const highScorers = scores.filter(score => score > avg).length;
  
  // 퍼센트 계산: (평균 넘는 학생 수 / 해당 케이스 전체 학생 수) * 100
  const percent = ((highScorers / n) * 100).toFixed(3);
  answer.push(percent + "%"); // 문제에서 요구하는 '%' 기호 추가
}

console.log(answer.join("\n"));
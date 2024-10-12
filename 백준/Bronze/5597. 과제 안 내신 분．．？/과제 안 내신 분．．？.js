const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const allStudents = Array.from({ length: 30 }, (_, i) => i + 1); // 1부터 30까지 배열 생성

input.forEach((student) => {
  const index = allStudents.indexOf(student);
  if (index !== -1) {
    allStudents.splice(index, 1); // 제출한 학생을 배열에서 제거
  }
});

// 남은 두 학생 번호를 오름차순으로 정렬한 후 출력
allStudents.sort((a, b) => a - b);

console.log(allStudents[0]);
console.log(allStudents[1]);
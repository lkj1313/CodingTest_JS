const fs = require('fs');

// 입력을 받아서 처리
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// A와 B를 정수로 변환
const A = parseInt(input[0]);
const B = parseInt(input[1]);

// 각 연산 결과를 출력
console.log(A + B);   // 덧셈
console.log(A - B);   // 뺄셈
console.log(A * B);   // 곱셈
console.log(Math.floor(A / B));  // 나눗셈 (몫)
console.log(A % B);   // 나머지

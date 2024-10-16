const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // N : 카드갯수, M : 목표숫자
const cards = input[1].split(" ").map(Number); // 카드 배열

function solution(N, M, cards) {
  let maxSum = 0;

  // 3중 반복문으로 3장의 카드 조합을 찾기
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) { // j는 항상 i보다 큰 값
      for (let k = j + 1; k < N; k++) {  // k는 항상 j보다 큰 값
        const sum = cards[i] + cards[j] + cards[k];
        // 합이 M보다 크지 않으면, 최댓값을 갱신
        if (sum <= M) {
          maxSum = Math.max(maxSum, sum);
        }
      }
    }
  }

  return maxSum;
}

console.log(solution(N, M, cards));

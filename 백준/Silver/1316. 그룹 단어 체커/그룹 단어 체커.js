const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
let groupWordCount = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  let isGroupWord = true;
  const seen = [];

  for (let j = 0; j < word.length; j++) {
    const char = word[j];

    // 이미 등장한 문자인데, 이전 문자와 연속되지 않으면 그룹 단어가 아님
    if (seen.includes(char) && word[j - 1] !== char) {
      isGroupWord = false;
      break;
    }

    // 아직 등장하지 않은 문자라면 seen에 추가
    if (!seen.includes(char)) {
      seen.push(char);
    }
  }

  if (isGroupWord) {
    groupWordCount++;
  }
}

console.log(groupWordCount);

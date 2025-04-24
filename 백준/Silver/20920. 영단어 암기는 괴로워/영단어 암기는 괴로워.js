const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const bocas = input.slice(1);
const map = new Map();
for (let i = 0; i < N; i++) {
  const boca = bocas[i];
  map.set(boca, (map.get(boca) || 0) + 1);
}

const result = [...map.entries()].filter(([word]) => word.length >= M);
const result2 = result.sort((a, b) => {
  const [wordA, countA] = a;
  const [wordB, countB] = b;
  if (countA !== countB) return countB - countA;
  if (wordA.length !== wordB.length) return wordB.length - wordA.length; // 2. 긴 단어 우선
  return wordA.localeCompare(wordB); // 알파벳사전순
});

let output = "";
for (const [word] of result) {
  output += word + "\n";
}
console.log(output);

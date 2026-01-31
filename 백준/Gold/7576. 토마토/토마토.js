const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }
  push(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  shift() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  length() {
    return this.tailIndex - this.headIndex;
  }
}

const [M, N] = input[0].split(" ").map(Number); // N : 행 M : 열
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const q = new Queue();
let unripened = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      q.push([i, j]);
    } else if (arr[i][j] === 0) {
      unripened++;
    }
  }
}
if (unripened === 0) {
  console.log(0);
  process.exit();
}
let day = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
while (q.length() > 0) {
  const [x, y] = q.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
      arr[nx][ny] = arr[x][y] + 1;
      q.push([nx, ny]);
      day = Math.max(day, arr[nx][ny]);
      unripened--;
    }
  }
}

if (unripened === 0) {
  console.log(day - 1);
} else {
  console.log(-1);
}

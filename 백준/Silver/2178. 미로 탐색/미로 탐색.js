const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
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
const [N, M] = input[0].split(" ").map(Number);
const miro = input.slice(1).map((line) => line.split("").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const q = new Queue();
  q.push([0, 0]);
  while (q.length() > 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && miro[nx][ny] === 1) {
        q.push([nx, ny]);
        miro[nx][ny] = miro[x][y] + 1;
      }
    }
  }
  return miro[N - 1][M - 1];
}

console.log(bfs());

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.tailIndex - this.headIndex === 0;
  }
}
const [N, M] = input[0].split(" ").map(Number);
// number[]
const maze = input.slice(1).map((line) => line.split("").map(Number)); // 2차원배열

function solve() {
  const queue = new Queue();
  queue.enqueue([0, 0]);
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (!queue.isEmpty()) {
    const [x, y] = queue.dequeue();
    const current = maze[x][y];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (maze[nx][ny] === 1) {
          maze[nx][ny] = current + 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
  }
  return maze[N - 1][M - 1];
}

console.log(solve());

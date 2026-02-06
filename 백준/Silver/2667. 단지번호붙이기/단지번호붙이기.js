const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = {};
  }
  push(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  shift() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  length() {
    return this.tail - this.head;
  }
}

const N = +input[0];
const map = input.slice(1).map((a) => a.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function bfs(startR, startC) {
  const q = new Queue();
  q.push([startR, startC]);
  visited[startR][startC] = true;
  let count = 1;
  while (q.length() > 0) {
    const [r, c] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
        if (!visited[nr][nc] && map[nr][nc]) {
          visited[nr][nc] = true;
          q.push([nr, nc]);
          count++;
        }
      }
    }
  }
  return count;
}
const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] && !visited[i][j]) {
      answer.push(bfs(i, j));
    }
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));

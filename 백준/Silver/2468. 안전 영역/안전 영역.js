const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }
  enq(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  deq() {
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
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: N }, () => new Array(N).fill(false));

function bfs(x, y, height, visited) {
  const q = new Queue();
  q.enq([x, y]);
  visited[x][y] = true;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (q.length() > 0) {
    const [cx, cy] = q.deq();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N)
        if (!visited[nx][ny] && arr[nx][ny] > height) {
          visited[nx][ny] = true;
          q.enq([nx, ny]);
        }
    }
  }
}
let maxSafetyAreas = 1;

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    maxHeight = Math.max(maxHeight, arr[i][j]);
  }
}

for (let h = 1; h <= maxHeight; h++) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] > h && !visited[i][j]) {
        bfs(i, j, h, visited);
        count++;
      }
    }
  }
  maxSafetyAreas = Math.max(maxSafetyAreas, count);
}

console.log(maxSafetyAreas);

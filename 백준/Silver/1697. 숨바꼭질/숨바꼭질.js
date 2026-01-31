const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

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
const [N, K] = input.split(" ").map(Number);

function bfs() {
  if (N === K) return 0;
  const visited = new Array(100001).fill(0);
  const q = new Queue();
  q.push(N);
  visited[N] = 1;
  while (q.length() > 0) {
    const cur = q.shift();
    if (cur === K) {
      return visited[cur] - 1;
    }
    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next <= 100000 && visited[next] === 0) {
        q.push(next);
        visited[next] = visited[cur] + 1;
        visited;
      }
    }
  }
}
console.log(bfs());

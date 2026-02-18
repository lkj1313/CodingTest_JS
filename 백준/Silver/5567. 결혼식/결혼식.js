const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
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

const n = +input[0];
const m = +input[1];

const arr = input.slice(2);

const graph = Array.from({ length: n + 1 }, () => []); // [][]

for (const line of arr) {
  const [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dist = new Array(n + 1).fill(-1); // 거리
const q = [];

q.push(1);
dist[1] = 0;
let count = 0;

while (q.length > 0) {
  const cur = q.shift();

  if (dist[cur] < 2) {
    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        count++;
        q.push(next);
      }
    }
  }
}

console.log(count);

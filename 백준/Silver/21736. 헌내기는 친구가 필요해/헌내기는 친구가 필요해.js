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

const [N, M] = input[0].split(" ").map(Number);

const visited = Array.from({ length: N }, () => new Array(M).fill(false));

const map = input.slice(1).map((line) => line.split(""));
let currentW;
for (let i = 0; i < N; i++) {
  const current = map[i].indexOf("I");
  if (current !== -1) {
    currentW = [i, current];
    break;
  }
}
visited[currentW[0]][currentW[1]] = true;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;
function bfs(w) {
  const q = new Queue();
  q.enq(w);
  while (q.length() > 0) {
    const [x, y] = q.deq();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        map[nx][ny] !== "X" &&
        !visited[nx][ny]
      ) {
        q.enq([nx, ny]);
        visited[nx][ny] = true;
        if (map[nx][ny] === "P") count++;
      }
    }
  }
}

bfs(currentW);

let answer = count ? count : "TT";

console.log(answer);

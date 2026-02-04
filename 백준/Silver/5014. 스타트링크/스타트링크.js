const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

class Queue {
  constructor() {
    this.storage = {};
    this.tail = 0;
    this.head = 0;
  }
  push(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }
  shift() {
    const item = this.storage[this.head];
    delete this.storage[this.head++];
    return item;
  }
  length() {
    return this.tail - this.head;
  }
}

const [F, S, G, U, D] = input.split(" ").map(Number);

function solution() {
  if (S === G) return 0;
  const queue = new Queue();
  const visited = new Array(F + 1).fill(-1);
  queue.push(S);
  visited[S] = 0;

  while (queue.length() > 0) {
    let now = queue.shift();

    for (const next of [now + U, now - D]) {
      if (next === G) return visited[now] + 1;
      if (next >= 1 && next <= F && visited[next] === -1) {
        visited[next] = visited[now] + 1;
        queue.push(next);
      }
    }
  }
  return "use the stairs";
}

console.log(solution());

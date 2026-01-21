const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const q = [];
const answer = [];
const commands = input.slice(1);

for (const co of commands) {
  const [command, number] = co.split(" ");
  if (command === "push") {
    q.push(Number(number));
  }
  if (command === "pop") {
    const item = q.shift();
    if (item) {
      answer.push(item);
    } else {
      answer.push(-1);
    }
  }
  if (command === "size") {
    answer.push(q.length);
  }
  if (command === "empty") {
    answer.push(q.length === 0 ? 1 : 0);
  }
  if (command === "front") {
    if (q.length > 0) {
      answer.push(q[0]);
    } else {
      answer.push(-1);
    }
  }
  if (command === "back") {
    if (q.length > 0) {
      answer.push(q[q.length - 1]);
    } else {
      answer.push(-1);
    }
  }
}

console.log(answer.join("\n"));

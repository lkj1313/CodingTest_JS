const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const users = input.slice(1).map((line, index) => {
  const [age, name] = line.split(" ");
  return { age: Number(age), name, index };
});

users.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.index - b.index;
});

console.log(users.map((user) => `${user.age} ${user.name}`).join("\n"));

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [듣도넘, 보도넘] = input[0].split(" ").map(Number);
const names = input.slice(1);

const 듣도들 = names.slice(0, 듣도넘);
const 보도들 = names.slice(듣도넘);

const 듣도들Set = new Set(듣도들);
const 듣보잡 = [];
for (let name of 보도들) {
  if (듣도들Set.has(name)) {
    듣보잡.push(name);
  }
}

듣보잡.sort(); // [a,b,c]

//출력
console.log(듣보잡.length);
console.log(듣보잡.join("\n"));

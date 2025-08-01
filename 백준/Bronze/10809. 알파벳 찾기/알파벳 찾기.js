const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const pos = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const code = input.charCodeAt(i) - 97;
  if (pos[code] === -1) {
    pos[code] = i;
  }
}

console.log(pos.join(" "));

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const A = +input;
for(let i=1; i<=9; i++){
  console.log(`${A} * ${i} = ${A*i}`)
}
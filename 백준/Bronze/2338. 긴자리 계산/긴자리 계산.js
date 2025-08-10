const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const A = BigInt(input[0].trim());
const B = BigInt(input[1].trim());

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());
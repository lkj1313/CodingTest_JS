const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let kg = Number(input[0]);

let count = 0;
while (true) {
  if (kg % 5 === 0) {
    count = count + kg / 5;
    console.log(count);
    break;
  } else {
    kg -= 3;
    count++;
  }
  if (kg < 0) {
    console.log(-1);
    break;
  }
}

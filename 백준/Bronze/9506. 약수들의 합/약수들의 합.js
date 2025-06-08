const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

function getDivisors(num) {
  const divisors = new Set();
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.add(i);
      if (i !== num / i) divisors.add(num / i);
    }
  }
  divisors.delete(num); // 자기 자신은 제외
  return [...divisors];
}

for (let i = 0; i < input.length; i++) {
  const number = input[i];
  if (number === -1) break;

  const divisors = getDivisors(number).sort((a, b) => a - b);
  const sum = divisors.reduce((a, b) => a + b, 0);

  if (sum === number) {
    console.log(`${number} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${number} is NOT perfect.`);
  }
}

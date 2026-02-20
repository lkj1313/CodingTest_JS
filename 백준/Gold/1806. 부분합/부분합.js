const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;

let answer = Infinity;
let sum = 0;

// 만약 레프트+라이트가 S보다 작다 ㅡ> right++ ㅡ> 같거나 반대다 ㅡ> left++

for (let right = 0; right < arr.length; right++) {
  sum = sum + arr[right];

  while (sum >= S) {
    const currentLenght = right - left + 1;
    answer = Math.min(currentLenght, answer);
    sum -= arr[left];
    left++;
  }
}

if (answer === Infinity) {
  console.log(0);
} else {
  console.log(answer);
}

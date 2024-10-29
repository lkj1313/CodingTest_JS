function solution(numbers) {
  // 정수배열 numbers

  let sums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      sums.push(sum);
    }
  }
  const asums = new Set(sums);
  const answer = [...asums].sort((a, b) => a - b);
  return answer;
}

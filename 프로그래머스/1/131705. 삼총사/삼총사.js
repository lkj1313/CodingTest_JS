function solution(numbers) {
  let count = 0;

  // 세 개의 수를 선택하는 모든 조합을 확인
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        // 세 수의 합이 0이 되는지 확인
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

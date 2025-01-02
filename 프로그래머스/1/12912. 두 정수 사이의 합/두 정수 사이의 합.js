function solution(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } /// b + b+1 + b+2
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  if (a === b) {
    sum = a;
  }
  return sum;
}

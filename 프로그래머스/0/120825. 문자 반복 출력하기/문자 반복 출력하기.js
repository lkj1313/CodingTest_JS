function solution(my_string, n) {
  var answer = "";
  answer = my_string
    .split("")
    .map((char) => char.repeat(n))
    .join("");
  return answer;
}

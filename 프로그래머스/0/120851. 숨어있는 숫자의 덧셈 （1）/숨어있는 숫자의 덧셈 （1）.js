function solution(my_string) {
    var answer = my_string.split('')
        .filter(n => !isNaN(n) && n !== ' ')  // 숫자인 문자만 필터링
        .map(Number)                          // 문자를 숫자로 변환
        .reduce((a, b) => a + b, 0);          // 숫자들의 합계

    return answer;
}

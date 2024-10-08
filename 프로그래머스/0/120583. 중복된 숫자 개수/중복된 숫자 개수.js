function solution(array, n) {
    const answerArray = array.filter(a=>a===n);
    var answer = answerArray.length
    return answer;
}
function solution(array) {
    var answer = [];
    const max = Math.max(...array)
    const index = array.indexOf(max)
    answer.push(max,index)
    return answer;
}
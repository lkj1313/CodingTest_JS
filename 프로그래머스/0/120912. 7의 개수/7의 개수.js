// array는 정수배열

function solution(array) {
    let answer = array.join('').split('').filter(char=>char=='7').length
    return answer
}
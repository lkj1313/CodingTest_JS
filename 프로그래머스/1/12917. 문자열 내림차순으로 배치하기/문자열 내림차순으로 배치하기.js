function solution(s) {
    var answer = '';
    const arrayed = s.split('')
    answer = arrayed.sort().reverse().join('')
    
    return answer;
}
function solution(s) {
   
    const arr = s.split('').sort().reverse();
    const answer = arr.join('')
    return answer;
}
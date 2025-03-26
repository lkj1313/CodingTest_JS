function solution(s) {
    var answer = '';
    if(s.length%2===0){ // 짝수개일때
       
        answer = s[(s.length/2)-1]+s[s.length/2]
    } else { // 홀수개일때
        const ceil = Math.floor(s.length/2)
        answer = s[ceil]
    }
    return answer;
}
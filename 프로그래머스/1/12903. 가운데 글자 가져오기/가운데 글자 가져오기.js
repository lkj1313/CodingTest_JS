function solution(s) {
    var answer = '';
    const divide = s.length/2
    if(Number.isInteger(divide))
        //정수 ㅡ> 짝수
         {
             answer = s[divide-1]+s[divide]
        
     } else {
         answer = s[Math.trunc(divide)]
     }
    return answer;
}
function solution(a, b) {
    let answer = 0
    const answer1 = 2*a*b
    let A = a.toString();
    let B = b.toString();
    const answer2 = +(A+B)
    if(answer1>answer2){
        answer = answer1
    } else if(answer1<=answer2){
        answer = answer2
    } 
    
    return answer;
}
function solution(x, n) { //정수n 자연수n
    var answer = [];
    
    for(let i=1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}
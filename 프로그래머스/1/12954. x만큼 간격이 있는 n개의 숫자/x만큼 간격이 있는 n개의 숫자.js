function solution(x, n) {
    var answer = [];
    for(let i=1; i<=n ;i++){
        answer.push(x+x*(i-1))
    }
    return answer;
}
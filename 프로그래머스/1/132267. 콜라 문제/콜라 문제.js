function solution(a, b, n) {
    let answer = 0;
    let current = n
    while(current>=a){
        answer += Math.floor(current/a)*b;
        current = Math.floor(current/a)*b + current % a;
    }
    return answer;
}
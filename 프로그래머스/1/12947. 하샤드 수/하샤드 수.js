function solution(x) {
    var answer = true;
    const stringX = String(x);
    const sum = stringX.split('').map(Number).reduce((a,b)=>a+b,0);
    answer = x%sum===0 ? true : false
    
    return answer;
}
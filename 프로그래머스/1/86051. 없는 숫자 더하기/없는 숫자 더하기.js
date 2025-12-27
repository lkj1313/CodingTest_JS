function solution(numbers) {
    var answer = -1;
    //45
    const sum = numbers.reduce((a,b)=>a+b,0)
    answer = 45-sum
    return answer;
}
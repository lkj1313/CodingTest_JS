function solution(arr) {

    let sum = arr.reduce((a,c)=>a+c,0)
    let answer = sum/arr.length
    return answer;
}
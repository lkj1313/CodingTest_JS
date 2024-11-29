function solution(my_string) {
    let array = my_string.split('').filter(char=>!isNaN(Number(char)))
    let answer = array.map(n=>Number(n)).sort((a,b)=>a-b)
    return answer;
}
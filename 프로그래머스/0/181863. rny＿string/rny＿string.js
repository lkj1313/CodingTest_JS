function solution(rny_string) {
    let answer = rny_string.split('').map((a)=>a==='m' ? 'rn' : a).join('')
    return answer;
}
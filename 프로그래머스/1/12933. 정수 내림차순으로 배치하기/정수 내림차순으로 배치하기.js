function solution(n) {
    
    const answer = Number([...String(n)].map(Number).sort((a,b)=>b-a).join(''))
    return answer;
}
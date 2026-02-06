function solution(s) {
    const Sarr = s.split(' ').map(Number);
    Sarr.sort((a,b)=>a-b);
    const result = [Sarr[0], Sarr[Sarr.length-1]];
    const answer = result.join(' ')
    
    return answer;
}
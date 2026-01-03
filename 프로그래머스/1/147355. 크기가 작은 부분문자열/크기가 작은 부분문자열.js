function solution(t, p) {
    var answer = 0;
    pLangth = p.length
    const Numbered_p = +p
    for(let i=0; i<=t.length-p.length; i++){  // 3 ,2 
        const current = Number(t.slice(i,i+p.length))
        if(current<=Numbered_p) answer++
    }
    return answer;
}
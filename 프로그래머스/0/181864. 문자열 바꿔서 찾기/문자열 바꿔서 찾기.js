function solution(myString, pat) {
 
    const changedMyString = myString.split('').map((s)=>{if(s==='A'){
        return 'B'
    } else if(s==='B'){
        return 'A'
    }}).join('')
    const result = changedMyString.includes(pat)
    const answer = result ? 1 : 0
    return answer;
}
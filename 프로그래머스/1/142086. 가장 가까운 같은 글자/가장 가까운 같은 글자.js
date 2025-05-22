function solution(s) {
    const lastSeen = {}; // 각 문자 마지막 등장 위치 저장
    const result = [];
    for(let i=0; i<s.length; i++){
        const char = s[i];
        if(lastSeen[char]===undefined){
            result.push(-1)
        } else{
            result.push(i - lastSeen[char])
        }
        lastSeen[char] = i
    }
    return result;
}
function solution(s) {
    var answer = [];
    let lastPos = {};
    for(let i =0; i<s.length ;i++){
        const char = s[i]
        if(lastPos[char]===undefined){
            answer.push(-1)
        } else{
            answer.push(i-lastPos[char])
        }
        lastPos[char] = i              
    }
    return answer
}
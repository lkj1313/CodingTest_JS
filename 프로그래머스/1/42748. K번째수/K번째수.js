function solution(array, commands) {
    var answer = [];
    for(let q=0; q<commands.length; q++){
        [i,j,k] = commands[q];
        const slicedArray = array.slice(i-1,j)
        const result = slicedArray.sort((a,b)=>a-b)[k-1]
        answer.push(result)
    }
    return answer;
}
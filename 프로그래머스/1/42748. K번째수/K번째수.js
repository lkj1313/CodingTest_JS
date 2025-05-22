function solution(array, commands) {
    var answer = [];
    for(let l=0; l<commands.length ;l++){ 
       const [i,j,k] = commands[l];
       const sliced = array.slice(i-1, j)
       const sortedSliced = sliced.sort((a,b)=>a-b)
       const o = sortedSliced[k-1]
       answer.push(o)
    }
    return answer;
}
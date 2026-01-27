function solution(k, m, score) {
    score.sort((a,b)=>a-b);
    if(score.length<m) return 0;
    let result = 0;
    let boxCount = Math.floor(score.length/m);
    for(let i =0; i<boxCount; i++){
        let box = [];
        for(let j=0; j<m; j++){
            box.push(score.pop());
            
        }
        result+= Math.min(...box) * m
    }
    return result;
}
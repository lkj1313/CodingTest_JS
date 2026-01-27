function solution(k, score) {
    var answer = [];
    const current = [];
    
    
    for(let i =0; i<score.length; i++){
        if(current.length<k){
            current.push(score[i]);
         answer.push(Math.min(...current))
        } else{
            
            const min = Math.min(...current)
            if(score[i]>min){
                const idx = current.indexOf(min);
                current.splice(idx,1)
                current.push(score[i])
                
            }
            answer.push(Math.min(...current))
        }
    }
    return answer;
}
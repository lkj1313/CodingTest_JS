function solution(k, tangerine) {
    const map = new Map();
    
    for(let i=0; i<tangerine.length; i++){
        map.set( tangerine[i], (map.get(tangerine[i]) || 0 ) +1     )                               
    }
    const countArr= [...map.values()];
    const size = map.size;
    countArr.sort((a,b)=>a-b);
    let sum = 0;
    let count = 0;
    for(let i=size-1; i>=0; i--){
        if(k<=sum) return;
        if(k>sum+countArr[i]){
            sum+=countArr[i]
            count++;
        } else if (k===sum+countArr[i]){
            count++
            break;
        } else {
           count++
            break;
        }
    }
    return count;
}
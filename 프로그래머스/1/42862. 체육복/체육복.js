function solution(n, lost, reserve) {
    const realReserve = reserve.filter((r)=>!lost.includes(r)).sort((a,b)=>a-b)
    const realLost = lost.filter((l)=>!reserve.includes(l)).sort((a,b)=>a-b)
    let answer = n - realLost.length;
    
    for(let i =0; i<realLost.length; i++){
        const lostNumber = realLost[i];
        const frontReser = realReserve.findIndex((n)=>n===(lostNumber-1))
        if(frontReser!==-1){
            answer+=1;
            realReserve.splice(frontReser,1)
            continue;
        }
        const nextReser = realReserve.findIndex((n)=>n===(lostNumber+1))
        if(nextReser!==-1){
            answer+=1;
            realReserve.splice(nextReser,1)
            continue;
        }
        
    }
    return answer;
}
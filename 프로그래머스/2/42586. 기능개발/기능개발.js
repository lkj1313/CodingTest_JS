function solution(progresses, speeds) {
    const remains = [];
    const answer = [];
    for(let i=0; i<progresses.length; i++){
        const remain = Math.ceil((100-progresses[i])/speeds[i]);
        remains.push(remain);
    }
    
    
    while(remains.length){
        const bottom = remains.shift();
        let count = 1;
        while(remains.length){
            if(bottom>=remains[0]){
                count++;
                remains.shift();
            } else{
                break;
            }
        }
        answer.push(count)
    }
    
    return answer;
}
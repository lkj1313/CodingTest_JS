function solution(priorities, location) {
    const arr = priorities.map((a,idx)=>({p:a, idx}));
    let count = 0;
 
    while(arr.length>0){
        let current =arr.shift();
        const hasHigher = arr.some((item)=>item.p > current.p);
        if(hasHigher){
            arr.push(current);
            
        } else{
            if(current.idx===location){
                count++;
                return count;
            } else{
                count++;
            }
        }
    }
    

}
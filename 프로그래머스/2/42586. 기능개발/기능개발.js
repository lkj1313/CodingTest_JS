function solution(progresses, speeds) {
  
 
    const days = progresses.map((p,i)=>{  //[7,3,9]
        return Math.ceil((100-p)/speeds[i])
    })
    let result = []
    let current= days[0]
    let count = 1
    for(let i=1; i<days.length ;i++){
        if(current>=days[i]){
            count++
        } else{
            result.push(count)
            current = days[i];
            count=1
        }
    }
     result.push(count);
    return result;
}
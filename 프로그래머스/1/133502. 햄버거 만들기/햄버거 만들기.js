function solution(ingredient) {
    const stack = [];
    let count = 0;
    
    for(const item of ingredient){
        stack.push(item);
        const last4 = stack.slice(-4);
        
        if(last4[0]===1 && last4[1]===2 && last4[2]===3 && last4[3]===1){
            count++;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            
        }
    }
    return count;
}
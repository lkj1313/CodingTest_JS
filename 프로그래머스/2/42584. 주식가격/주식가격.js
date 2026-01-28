function solution(prices) {
    const n = prices.length
    const answer = new Array(n).fill(0);
    const stack = [];
    
    for(let i =0; i<n; i++){
        while(stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]){
            const lastIdx = stack.pop(); 
            answer[lastIdx] = i - lastIdx; 
        }
        
        stack.push(i)
    }
    
    while(stack.length>0){
        const current = stack.pop();
        answer[current] =   n-1-current
    }
   
        
  
    return answer;
}
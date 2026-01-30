function solution(nums) {
    const current = [];
    const result = [];
   
    
    function dfs(start){
    if(current.length===3){
        result.push([...current]);
        return;
    }
    for(let i =start; i<nums.length; i++){
        current.push(nums[i]);
        dfs(i+1);
        current.pop();
    }
    
    }
    dfs(0);
    const answer = result.filter(arr=>{
        return isPrime(arr.reduce((a,b)=>a+b,0))
    })
    
    return answer.length;
}


function isPrime(n){
    if(n<=1) return false;
    if(n===2) return true;
    
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}


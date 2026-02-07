function solution(numbers) {
    const numsArr= numbers.split('').map(Number)
    const length = numsArr.length
    const answerArr = []
    const num = []
     const visited = new Array(length).fill(false)
    function dfs(depth){
       
        if(depth===length){  
            answerArr.push([...num])
            return;
        }
        for(let i =0; i<length; i++){
            if(!visited[i]){
            num.push(numsArr[i])
            visited[i] = true;
            dfs(depth+1);
            num.pop();
            visited[i] = false;
            }
        }
        
    }
    for(let i =0; i<length; i++){
        dfs(i)
    }
    const arr2 = answerArr.map((arr)=>arr.join(''));
    const seteedArr = [...new Set([...new Set(arr2)].map(Number))]
    
    function isPrime(N){
        if(N<2) return false;
        for(let i=2; i<=Math.sqrt(N); i++){
            if(N%i===0){
                return false
            }
        }
        return true;
    }
    let count = 0;

    for(let i=0; i<seteedArr.length; i++){
       
        if(isPrime(seteedArr[i])){
            count++
        }
    }
    
    return count
}
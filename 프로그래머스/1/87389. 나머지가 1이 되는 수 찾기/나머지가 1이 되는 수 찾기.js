function solution(n) {
    var answer = 0;
    const arr = []
    for(let i=1; i<=n; i++){
       if(n%i===1){
           arr.push(i)
       }
        
    }
    const idx = arr.length-1
    if(arr.length===0){
        answer = 3
    } else {
        answer = arr[0]
    }
    
    
    return answer;
}
function solution(n) {
    const arr = []
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            arr.push(i)
            if(i !== n/i ){
                arr.push(n/i)
            }
        } 
    }
    const answer = arr.reduce((a,b)=>a+b,0)
    return answer;
}
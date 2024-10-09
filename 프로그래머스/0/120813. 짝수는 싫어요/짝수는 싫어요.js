function solution(n) {
       var answer =[]
  
    //2%!==0 && i<=n
    for(let i=1; i<=n; i=i+2 ){
        answer.push(i)
    }
   
    return answer;
}
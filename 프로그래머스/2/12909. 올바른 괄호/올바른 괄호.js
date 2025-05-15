function solution(s){
    const stack = []
   for(char of s){
       if(char === '('){
           stack.push(char)
       } else { // ')'일시
           const top = stack.pop()
           if(top!=='('){
               return false
           }
       }
   }
    


    return stack.length===0;
}
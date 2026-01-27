function isValid(s) {
    const stack = [];
     const pair = { ')': '(', ']': '[', '}': '{' };
    for(char of s){
        if(char==='[' || char ==='(' || char === '{'){
            stack.push(char)
        } else{
            if(stack.length===0) return false;
            const pop = stack.pop();
            if(pop!==pair[char]) return false;
        }
    }
    if(stack.length===0) return true;
    else return false;
    
}

function solution(s){
   let k = s;
   let count = 0;
   for(let i =0; i<s.length ;i++){
       if(isValid(k)) count++
       k = k.slice(1) + k[0]
   }
    return count;
}

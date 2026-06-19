function solution(s) {
    let count = 0;
    for(let i=0;  i<s.length; i++){
        const str = s.slice(i) + s.slice(0,i);
        if(isValid(str)){
            count++;
        }
    }
    
    
    function isValid(str){
        const stack = [];
        const pair = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        for(let i=0; i<str.length; i++){
            if(str[i] === '(' || str[i] === '{' || str[i] === '['){
                stack.push(str[i]);
            } else{
                if(stack.length===0){
                    return false;
                }
                if(stack.pop()!==pair[str[i]]){
                    return false;
                }
            }
        }
        return stack.length ===0; 
    }
    return count;
        
}
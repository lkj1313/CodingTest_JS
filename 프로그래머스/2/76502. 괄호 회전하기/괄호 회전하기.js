function isValid(str){
    const stack = [];
    const pair = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    for(const char of str){
        if(char==='(' || char==='[' || char==='{'){
            stack.push(char)
        } else{
            if(stack.length===0) return false;
            const top = stack.pop();
            if(top===pair[char]){
                continue;
            } else{
                return false;
            }
        }
    }
    
    return stack.length===0;
}


function solution(s) {
    let count = 0;
    for(let i=0; i<s.length; i++){
        const str = s.slice(i) + s.slice(0,i);
        if(isValid(str)) count++;
    }
    return count;
}
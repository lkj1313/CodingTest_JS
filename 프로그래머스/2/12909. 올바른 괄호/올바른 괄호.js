function solution(s){
   const arr = s.split('');
    const stack = [];
   for(let i=0; i<arr.length; i++){
       if(arr[i]==='('){
           stack.push(arr[i])
       } else{
           if(stack.length===0) return false;
           else stack.pop();
       }
   }
    return stack.length>0 ? false : true;
}
function solution(s){
    let bal = 0;
    for(let i =0; i<s.length; i++){
        if(s[i]==='('){
            bal++;
        } else{
            bal--;
        }
        if(bal<0) return false;
    }
    return bal ===0;
}
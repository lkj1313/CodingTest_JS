function solution(n, control) {
    
    var answer = 0;
    
    for(let char of control){
        if(char==='w'){
            n=n+1
        } else if(char==='s'){
            n=n-1
        } else if (char==='d'){
            n=n+10
        } else{
            n=n-10
        }
    }
    return n;
}
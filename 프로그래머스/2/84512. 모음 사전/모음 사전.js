function solution(word) {
    const al = ['A','E','I','O','U'];
    const arr = [];
    const currentWord=[]
    function dfs(depth,num){
    
    if(depth===num){
        arr.push(currentWord.join(''));
        return;
    }
    
    for(let i=0; i<5 ;i++){
        currentWord.push(al[i]);
        dfs(depth+1,num);
        
        currentWord.pop();
        
    }
}
    for(let i=1; i<=5 ;i++){
        dfs(0,i)
    }
    return arr.sort().indexOf(word)+1;
}

function solution(t, p) {
    
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++){
        const subStr = t.substr(i,p.length)
        if(+subStr<=+p){
            count++
        }
    }
    return count;
}
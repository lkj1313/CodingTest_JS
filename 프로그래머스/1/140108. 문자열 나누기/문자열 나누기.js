function solution(s) {
    const length = s.length;
    var answer = 0;
    let x = s[0];
    let xCount = 1;
    let yCount = 0;
    let count = 0;
    for(let i=1; i<length; i++){
      
      
        if(xCount===yCount){
            count++
            x = s[i];
            xCount=1;
            yCount=0;
            continue;
        }
         if(s[i]===x){
            xCount++;
        } else{
            yCount++;
        }  
    }
    return count+1;  // i=1 ㅡ> ycount++;
                   // i=2 ㅡ> count++ x=s[2]
}
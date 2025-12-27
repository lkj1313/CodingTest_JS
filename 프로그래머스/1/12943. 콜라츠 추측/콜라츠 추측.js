function solution(num) {
    var answer = num;
    let i =0
    while(true){
        if(answer===1) break
        if(i>=500){ i=-1; break}
        
      
        if(answer%2===0){
            answer = answer/2;
            i++
        } else{
            answer = (answer*3)+1
            i++
        }
    }
    return i;
}
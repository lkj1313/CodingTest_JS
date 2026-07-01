function solution(X, Y) {
    const map = new Map();
    
    for(let i=0; i<Y.length; i++){
        const num = Y[i];
        map.set(num, (map.get(num) || 0) + 1);
        
    }
    let word = "";
    for(let i=0; i<X.length; i++){
        const num = X[i];
        if(map.get(num)>0){
            map.set(num, map.get(num)-1);
            word += num;
        }
    }
    const arr = word.split('');
    const sortedArr = arr.sort((a,b)=>b-a);
    if(sortedArr.length===0) return "-1";
    if(sortedArr[0]==="0") return "0";
    const answer = sortedArr.join('');
    
    return answer;
    
    
}
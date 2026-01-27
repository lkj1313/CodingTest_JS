function solution(n, m, section) {
    let currentNum = []
    const arr = new Array(n+1).fill(true);
    for(let i =0; i<section.length; i++){
        arr[section[i]] = false;
    }

    let count = 0;
    for(let i =1; i<=arr.length ; i++){
        if(arr[i]===false){
            count++
            for(let j=i; j<i+m; j++){
                arr[j] = true;
            }
        }
    }
   return count;
    
}
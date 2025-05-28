function solution(number, limit, power) {
    var result = 0;
    for(let i=1; i<=number ;i++){
        let count = 0;
        for(let j=1; j*j<=i;j++){
            if(i%j===0) {count++
                        if(i!==j*j) count++}
           
        }
        count>limit ? result+=power : result+=count
    }
    return result;
}
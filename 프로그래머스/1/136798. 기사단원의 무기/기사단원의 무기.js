function solution(number, limit, power) {
    let result = 0;
    for(let i=1; i<=number; i++){
        let divisor = countDivisiors(i)
        if(divisor>limit){
            result+=power;
        } else{
            result+=divisor;
        }
        
    }
    return result;
}

function countDivisiors(number){
    let count = 0;
    for(let i =1; i*i<=number; i++){
        if(number%i===0){
        if(i*i===number){
            count++
        } else{
            count = count+2
        }
    }}
    return count;
}

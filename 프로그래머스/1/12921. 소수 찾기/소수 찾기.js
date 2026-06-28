function solution(n) {
    let count = 0;
    for(let i = 2; i <= n; i++){
        if(isPrime(i)) count++;
    }
    return count;
}

function isPrime(number){
    if(number < 2) return false;
    
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
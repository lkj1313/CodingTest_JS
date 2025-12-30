function solution(n, m) {
    var answer = [];
    const getGCD = (a,b)=>{
        if(b===0) return a
        return getGCD(b, a % b);
    }
    const gcd = getGCD(n,m);
    const lcm = n*m/gcd
   
    return [gcd,lcm];
}
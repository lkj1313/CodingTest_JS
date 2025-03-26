function solution(n,m){
    let gcd = 1; // 최대공약수
    const min_num = Math.min(n,m)
    for(let i=1; i<=min_num; i++ ){
        if(n%i===0 && m%i===0){
            gcd = i
        }
    }
    let 최소공배수 = n*m/gcd
    return [gcd, 최소공배수]
}
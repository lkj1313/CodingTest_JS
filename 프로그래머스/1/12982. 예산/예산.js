function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let sum = 0;
    let number = 0;
    for (const money of d){
        if(sum+money>budget) break;
        sum+=money
        number++
    }
    return number;
}
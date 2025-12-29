function solution(price, money, count) {

    let PriceSum = 0;  // 비용총합
    for(let i =1; i<=count; i++){
        PriceSum+= price*i
    }
    
    let answer = money-PriceSum>=0 ? 0 : Math.abs(money-PriceSum)
    return answer;
}
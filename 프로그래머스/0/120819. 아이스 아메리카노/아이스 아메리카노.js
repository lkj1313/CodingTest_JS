function solution(money) {
    var answer = [];
    const maxCups = Math.floor(money/5500)
    const restMoney = money%5500
    
    return [maxCups, restMoney]
}
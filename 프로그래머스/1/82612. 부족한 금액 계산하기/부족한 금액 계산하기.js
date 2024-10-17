function solution(price, money, count) {
    var rest = money;
    var answer = 0;
    for(let i=1; i<=count; i++){
        비용 = price*i
        rest-= 비용
        
    }
    if(rest>=0){
        answer =0
    } else{
        answer = -rest
    }

    return answer;
}
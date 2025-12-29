function solution(left, right) {
    var answer = 0;
    const arr = []
    for(let i =left; i<=right  ;i++){
       let count = 0;
       if(Number.isInteger((Math.sqrt(i)))){// 제곱근이 정수면? ㅡ> 약수의개수가 홀수
           count-=i
    } else{
        count+=i
    }
        answer+=count
    }
    return answer;
}
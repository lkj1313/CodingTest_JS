function solution(n) {
   var answer = []
    while(n!==1){
        answer.push(n);
        if(n%2===0){
            n=n/2
        } else{
            n= 3*n+1
        }

    }
    answer.push(1)
      return answer;
}

// x가 1이되는지 묻는문제

// 1. x while 
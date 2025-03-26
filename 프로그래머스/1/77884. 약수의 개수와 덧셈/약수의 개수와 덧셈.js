function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right; i++){
        let count =0;
        for(let k = 1; k<=i; k++){
            if(i%k===0){
                count++
            }
        }
        if(count%2===0){
            answer+=i
        } else {
            answer-=i
        }
    }
    return answer;
}
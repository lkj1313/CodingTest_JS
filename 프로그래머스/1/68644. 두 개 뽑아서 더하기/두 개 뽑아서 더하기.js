function solution(numbers) {
    const answerArr = [];
    for(let i=0; i<numbers.length ;i++){
        for(let k=i+1; k<numbers.length; k++){
            const sum = numbers[i] + numbers[k]
            answerArr.push(sum);
        }
    }
    const answer = [...new Set(answerArr)];
    answer.sort((a,b)=>a-b)
    return answer;    
    
}
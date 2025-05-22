function solution(numbers) {
    var answer = [];
    for(let i =0; i<numbers.length; i++){
        for(let k=i+1; k<numbers.length; k++){
            answer.push(numbers[i]+numbers[k])
        }
    }
    const uniq = [...new Set(answer)]
    const realAnswer = uniq.sort((a,b)=>a-b)
    return realAnswer;
}
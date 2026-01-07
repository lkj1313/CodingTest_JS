function solution(numbers) {
    const temp = new Set();
   
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            temp.add(numbers[i]+numbers[j])
        }
    }
    const answer = [...temp].sort((a,b)=>a-b)
    return answer;
}
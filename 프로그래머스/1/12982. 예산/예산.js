function solution(d, budget) {
    let sum = 0;
    let answer = 0;
    const sorted_array = d.sort((a,b)=>a - b)
    for(let i = 0; i<sorted_array.length ;i++){
        sum+= sorted_array[i]
        if(sum>budget) break
        answer++
        
    }
    
    return answer;
}
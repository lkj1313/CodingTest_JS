function solution(food) {
    var answer = '';
    for(let i=1; i<food.length ;i++){
        if(food[i]<2) continue;
        const number = Math.floor(food[i]/2);
        answer+= String(i).repeat(number);
    }
    const reversedAnswer = [...answer].reverse().join('');
    
    return answer+'0'+reversedAnswer;
}
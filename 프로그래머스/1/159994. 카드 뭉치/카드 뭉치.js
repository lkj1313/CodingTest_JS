function solution(cards1, cards2, goal) {
    var answer = '';
    
    for(const word of goal){
        if(word === cards1[0]){
            answer = 'Yes';
            cards1.shift();
            continue;
        } 
        if(word ===cards2[0]){
            answer = 'Yes'
            cards2.shift();
            continue;
        } 
        answer = 'No'
        break;
    }
    return answer;
}
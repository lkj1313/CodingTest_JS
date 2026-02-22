function solution(participant, completion) {
    const participantMap = new Map();
    
    for(let i=0; i<participant.length; i++){
        participantMap.set(participant[i], (participantMap.get(participant[i])|| 0)  +1);
    }
    
    for(let i=0; i<completion.length; i++){
        participantMap.set(completion[i], participantMap.get(completion[i])-1);
    }
    let answer = ''
    for(const [key, value] of participantMap){
       if(value===1){
           answer+=key
       }
    }
    return answer;
    
}
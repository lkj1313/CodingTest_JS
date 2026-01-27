function solution(name, yearning, photo) {
    var answer = [];
  
    const map = new Map();
    for(let i =0; i<name.length; i++){
        map.set(name[i],yearning[i]);
    }
    for(const arr of photo){
        let currentScore = 0;
        for(const name of arr){
           if(map.has(name)) currentScore +=  map.get(name);
        }
        answer.push(currentScore);
    }
    return answer
}
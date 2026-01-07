function solution(s) {
    var answer = s;
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
    
    for(let i =0; i<words.length; i++){
        answer = answer.split(words[i]).join(i)
    }
    return Number(answer);
}
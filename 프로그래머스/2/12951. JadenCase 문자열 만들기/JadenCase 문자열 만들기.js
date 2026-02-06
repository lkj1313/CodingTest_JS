function solution(s) {
    const Sarr = s.split(' ');
    const result = [];
    for (const word of Sarr) {
       
        if (word.length > 0) {
            const lowerWord = word.toLowerCase();
            const newWord = lowerWord[0].toUpperCase() + lowerWord.slice(1);
            result.push(newWord);
        } else {
            
            result.push("");
        }
    }
    const answer = result.join(' ')
    return answer;
}
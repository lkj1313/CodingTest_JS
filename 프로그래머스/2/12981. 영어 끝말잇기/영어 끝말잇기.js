function solution(n, words) {
    
    const seen = new Set();
    seen.add(words[0]);
    
    for(let i=1; i<words.length; i++){
        const prevWord = words[i-1]
        const currentWord = words[i]
        // 
        if(prevWord[prevWord.length-1] !== currentWord[0] || seen.has(currentWord)){
            return [(i%n)+1, Math.floor(i/n)+1]   /// 2
        }
        seen.add(words[i])
    }
    return [0,0]
    

    
}


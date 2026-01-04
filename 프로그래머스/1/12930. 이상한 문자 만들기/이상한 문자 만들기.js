function solution(s) {
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        
        let chars = words[i].split(''); 
        
        for (let j = 0; j < chars.length; j++) {
           
            if (j % 2 === 0) {
                chars[j] = chars[j].toUpperCase();
            } else {
                chars[j] = chars[j].toLowerCase();
            }
        }
        
      
        words[i] = chars.join('');
    }
    
    return words.join(' ');
}
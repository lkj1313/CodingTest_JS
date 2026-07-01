function solution(babbling) {
    const sounds = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    for(const word of babbling){
        let temp = word;
        
        for(let i=0; i<sounds.length; i++){
            temp = temp.replaceAll(sounds[i], String.fromCharCode(65+i));
        }
        
        let hasOther = false;
        for(const char of temp){
            if(char<'A' || char> 'D'){
                hasOther = true
                break;
            }
        }
        if(hasOther) continue;
        
        let hasRepeat = false;
        for(let i=1; i<temp.length; i++){
            if(temp[i]===temp[i-1]){
                hasRepeat = true;
                break;
            }
        }
        if(hasRepeat) continue;
        
        count++;
        
        
    }
    return count;
    
}
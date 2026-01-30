function solution(babbling) {

    const can = ["aya", "ye", "woo", "ma"]
    let count = 0;
 
    for(let bab of babbling){
        let possible = true;
        for(const c of can){
            if(bab.includes(c+c)){
                possible = false;
                break;
            }
        }
        if(possible){
            for(const c of can){
                bab = bab.split(c).join(' ');
                
            }
            if (bab.trim().length === 0) {
                count++;
            }
        }
    }
    
    
    
    return count;
}
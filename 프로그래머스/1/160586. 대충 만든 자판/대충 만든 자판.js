function solution(keymap, targets) {
    const map = new Map();
    for(let i=0; i<keymap.length; i++){
        const splited = keymap[i].split('');
        for(let k=0; k<splited.length; k++){
            const a = splited[k];
            const get = map.get(a);
            if(!get){
                map.set(a,k+1);
            } else{
                if(get>k){
                    map.set(a,k+1);
                }
            }
        }
    }
    const answer = [];
    for(let i=0; i<targets.length; i++){
        let count = 0;
        const splited = targets[i].split('');
        for(const a of splited){
            if(map.get(a)){
                count+= map.get(a);
            } else{
                count = -1;
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}
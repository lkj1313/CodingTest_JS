function solution(keymap, targets) {
    var answer = [];
    const keymaps = keymap.map((w)=>w.split(''));
    const arr = targets.map((w)=>w.split(''))
    for(let i=0; i<targets.length; i++){
        let count1 = 0;
        for(let j=0; j<arr[i].length; j++){
            const target = arr[i][j];
            let count2 = Infinity;
            for(let k=0; k<keymaps.length; k++){
                const index = keymaps[k].findIndex((s)=>s===target)
                if(index!==-1){
                    count2 = Math.min(count2, index+1);
                }
            }
            if(count2===Infinity){
                count1=-1;
                break;
            } else{
                count1+= count2;
            }
        }
        answer.push(count1)
    }
    
    
    return answer;
}
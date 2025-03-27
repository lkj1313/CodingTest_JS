function solution(s) {
    var array = [];
    const splited_s = s.split(' ')
    for(let i=0; i<splited_s.length; i++){
        let 짝홀수된 = splited_s[i].split('').map((w,k)=>{
            if(k%2===0){
               return w.toUpperCase();
            } else{
                return w.toLowerCase();
            }
        })
        const 조인 = 짝홀수된.join('')
        array.push(조인);
        
    }
    let answer = array.join(' ')
    return answer;
}
function solution(n) {
    var answer = 0;
    const ntoString = n.toString(2);
    const length = ntoString.length;
    const oneLength = (ntoString.split('')).filter((a)=>a==='1').length;
    const hoobo = [];
    for(let i=n+1; i<Infinity; i++){
    
        const iOneLength = i.toString(2).split('').filter((a)=>a==='1').length;
        if(iOneLength!==oneLength) continue;
        hoobo.push(i)
        break;
        
    }

    return hoobo[0];
}
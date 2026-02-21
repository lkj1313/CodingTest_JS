function solution(dirs) {
    let x = 0;
    let y = 0;
    const set = new Set();
    for(const move of dirs){
        let nx = x
        let ny = y
        
        if(move==='U') ny++;
        if(move==='D') ny--;
        if(move==='R') nx++;
        if(move==='L') nx--;
        
        if(nx>5 || nx<-5 || ny>5 || ny<-5) continue;
        
        set.add(`${x},${y} -> ${nx},${ny}`)
        set.add(`${nx},${ny} -> ${x},${y}`)
        
        x=nx;
        y=ny
        
        
    }
    
    return set.size/2
}
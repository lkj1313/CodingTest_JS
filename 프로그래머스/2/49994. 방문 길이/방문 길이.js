function solution(dirs) {
    let x = 0;
    let y = 0;
    const set = new Set();
    
    for(const dir of dirs){
        let nx = x;
        let ny = y;
        
        if(dir==='U'){
            ny++;
        } 
        if(dir==='D'){
            ny--;
        }
        if(dir==='R'){
            nx++;
        }
        if(dir==='L'){
            nx--;
        }
        if(nx>5 || nx<-5 || ny>5 || ny<-5) continue;
        
        const road1 = `${x},${y}-${nx},${ny}`
        const road2 = `${nx},${ny}-${x},${y}`
        
        set.add(road1);
        set.add(road2);
        
        x=nx;
        y=ny;
        
    }
    
    return set.size/2
    
}
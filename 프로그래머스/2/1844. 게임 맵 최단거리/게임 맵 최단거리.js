class Queue{
    constructor(){
        this.items={};
        this.tailIndex = 0;
        this.headIndex = 0;
    }
    push(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    shift(){
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item
    }
    length(){
        return this.tailIndex-this.headIndex;
    }
}


function solution(maps) {
    const n = maps.length;    // 세로(행)
    const m = maps[0].length; // 가로(열)
    var answer = 0;
    const dx=[-1,1,0,0]
    const dy=[0,0,-1,1]
    
    function bfs(){
        const q = new Queue();
        q.push([0,0]);
        while(q.length()>0){
            const [x,y] = q.shift();
            if(x===n-1&&y===m-1){
                return maps[n-1][m-1]
            }
            for(let i=0; i<4; i++){
                const nx = x+dx[i];
                const ny = y+dy[i];
                if(nx>=0&&nx<n&&ny>=0&&ny<m&&maps[nx][ny]===1){
                    maps[nx][ny] = maps[x][y]+1;
                    q.push([nx,ny])
                }
            }
        }
        return -1;
    }
    return bfs()
    
}
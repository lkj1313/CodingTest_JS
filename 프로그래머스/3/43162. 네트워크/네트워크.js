class Queue{
    constructor(){
        this.items ={};
        this.tailIndex = 0;
        this.headIndex = 0;
    }
    push(item){
        this.items[this.tailIndex]=item;
        this.tailIndex++;
    }
    shift(){
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    length(){
        return this.tailIndex-this.headIndex;
    }
}

function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let answer = 0;
    for(let i=0; i<n ;i++){
        if(!visited[i]){
            bfs(i);
            answer++
        }
        
    }
    
    function bfs(i){
        const q = new Queue();
        q.push(i)
        
        while(q.length()>0){
            const current = q.shift(i);
            for(let next=0 ; next<n  ;next++){
                if(computers[current][next] && !visited[next]){
                    q.push(next);
                    visited[next] = true;
                }
            }
        }
    }
    return answer;
}
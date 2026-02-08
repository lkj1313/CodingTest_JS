class Queue{
   constructor(){
       this.store = {};
       this.tail = 0;
       this.head = 0;
   } 
   push(item){
       this.store[this.tail++] = item;
       
   }
   shift(){
       const item = this.store[this.head]
       delete this.store[this.head];
       this.head++;
       return item;
   } 
   pop(){
       const item = this.store[this.head-1]
       delete this.store[this.head-1]
       this.tail--
       return item
   }
   back() {
    if (this.length() === 0) return undefined;
    return this.store[this.tail - 1];
}
   peak(){
       return this.store[this.head];
   }
   length(){
       return this.tail - this.head;
   } 
}

function solution(people, limit) {
    people.sort((a,b)=>a-b);
    const q = new Queue();
    people.forEach((n)=>q.push(n));
    let count = 0;
    while(q.length()>0){
       const back = q.back();
       const front = q.peak();
        if(limit>=back+front){
            q.pop();
            q.shift();
            count++;
        } else{
            q.pop();
            count++;
        }
    }
    return count;
   
}
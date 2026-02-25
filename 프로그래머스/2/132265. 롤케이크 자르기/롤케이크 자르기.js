function solution(topping) {
    
   const toppingMap = new Map();
   let count = 0;
    for(const num of topping){
        toppingMap.set(num, (toppingMap.get(num) || 0) +1);
    }
    const set = new Set();
    for(let i=0; i<topping.length; i++){
        set.add(topping[i]);
        
        toppingMap.set(topping[i], (toppingMap.get(topping[i]) || 0) -1)
        if(toppingMap.get(topping[i])===0) toppingMap.delete(topping[i]);
        
        if(set.size===toppingMap.size){
            count++;   
        }
    }
    return count;
}
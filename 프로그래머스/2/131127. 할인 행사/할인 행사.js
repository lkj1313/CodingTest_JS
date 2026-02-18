function solution(want, number, discount) {
 
    const wantMap = new Map();
    for(let i=0; i<want.length ;i++){
        wantMap.set(want[i], number[i]);
    }
    let count = 0;
    for(let i=0; i<=discount.length-10 ;i++){
        const discountedMap = new Map();
        let flag = true;
        const arr = discount.slice(i, 10+i)
        for(let i=0; i<arr.length; i++){
            discountedMap.set(arr[i], (discountedMap.get(arr[i]) || 0 )+1)
        }
        for(const [key,value] of wantMap){
            if(discountedMap.get(key) !== value){
                flag=false;
                break;
            }
        }
        if(flag) count++;
    }
    
    
    
    return count;
}

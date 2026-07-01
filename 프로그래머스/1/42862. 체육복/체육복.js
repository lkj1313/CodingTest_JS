function solution(n, lost, reserve) {
    const clothes = new Array(n).fill(1);
    
    for(const l of lost){
        clothes[l-1] = clothes[l-1] - 1;
        
    }
    for(const r of reserve){
        clothes[r-1] = clothes[r-1] + 1;
    }
    
    for(let i=0;  i<clothes.length; i++){
        if(clothes[i]===0){
            if(i>0&& clothes[i-1]===2 ){
                clothes[i]++;
                clothes[i-1]--;
            } else if(i<n-1&& clothes[i+1]===2){
                clothes[i]++;
                clothes[i+1]--;
            }
        }
    }
    return clothes.filter(c=>c>=1).length;
    
}
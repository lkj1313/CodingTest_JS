function solution(sizes) {
    maxWidth = 0;
    maxHeigth = 0;
   for (let [w,h] of sizes){
       let [big,small] = w>h ? [w,h] : [h,w]
       maxWidth = Math.max(maxWidth, big)
       maxHeigth = Math.max(maxHeigth, small)
       
   }
    
    
    
    
    return maxWidth*maxHeigth;
}


// 
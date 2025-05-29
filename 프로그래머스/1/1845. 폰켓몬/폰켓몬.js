function solution(nums) {
    var answer = 0;
    const noDuplicatedNums = [...new Set(nums)] //중복제거  
    if(noDuplicatedNums.length>=nums.length/2){
        return nums.length/2
    } else{
        return noDuplicatedNums.length
    }
    
   
}

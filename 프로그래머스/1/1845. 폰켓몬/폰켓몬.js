function solution(nums) {
     let answer = 0;
     const set = new Set(nums);
     if(set.size<nums.length/2){
         answer = set.size;
     } else{
         answer= nums.length/2;
     }
    return answer;
}

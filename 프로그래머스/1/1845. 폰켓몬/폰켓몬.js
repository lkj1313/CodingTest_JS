function solution(nums) {
  const maxPick = nums.length/2
  const uniqueTypes = new Set(nums) // 중복제거해서 종류 수 계산
   return Math.min(uniqueTypes.size, maxPick);
}
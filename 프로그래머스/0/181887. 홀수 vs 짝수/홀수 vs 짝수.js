function solution(num_list) {
   const A = num_list.filter((_,index)=>{
      return index%2 === 0 
   })
    const B = num_list.filter((_,index)=>{
      return index%2 !== 0 
   })
    let answer = 0
    const answer1 = A.reduce((a,b)=>a+b,0)
    const answer2 = B.reduce((a,b)=>a+b,0)
    answer = answer1 > answer2 ? answer1 : answer2
    return answer;
}
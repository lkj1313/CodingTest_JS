function solution(answers) {
  const one = [1,2,3,4,5] // 5
  const two = [2,1,2,3,2,4,2,5] // 8
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10
  
  let count = new Array(3).fill(0);
    
  for(let i=0; i<answers.length; i++){
      if(answers[i] === one[i%5]) count[0]++;
      if(answers[i] === two[i%8]) count[1]++;
      if(answers[i] === three[i%10]) count[2]++;
      
  }
  const max = Math.max(...count);
  const answer = count.map((n,i)=>{
      if(max!==n){
          return -1;
      } else{
          return i+1;
      }
  }).filter((n)=>n!==-1);
  answer.sort((a,b)=>a-b);
    
  return answer
    
}
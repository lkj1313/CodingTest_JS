function solution(n)
{
 let str = String(n);
 let arr = [...str].map(Number);
 const answer = arr.reduce((a,b)=>a+b,0)
 return answer
}
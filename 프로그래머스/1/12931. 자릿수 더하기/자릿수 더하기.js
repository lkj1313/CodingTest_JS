function solution(n)
{
   const splitedN = String(n).split('').map(n=>Number(n))
   const sum = splitedN.reduce((a,b)=>a+b,0)
   

    return sum;
}
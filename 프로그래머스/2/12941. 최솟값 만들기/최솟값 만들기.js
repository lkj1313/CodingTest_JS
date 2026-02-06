function solution(A,B){
    A.sort((a,b)=>b-a);   /// [4,2,1]
    B.sort((a,b)=>a-b);   /// [4,4,5]
    let sum = 0;
    const length = A.length
    for(let i=0; i<length; i++){
        const Apop = A.pop();
        const Bpop = B.pop();
        sum += Apop*Bpop;
    }

    return sum;
}
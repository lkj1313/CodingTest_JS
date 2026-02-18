function solution(arr) {
  
   return arr.reduce((acc,cur)=>getLcm(acc,cur))
}


    
function getGcd(a,b){ // 최대공약수
    while(b!==0){
        let remain = a%b;
        a=b;
        b=remain;
    }
    return a;
}

function getLcm(a,b){ // 최소공배수
    return a*b/getGcd(a,b);
}




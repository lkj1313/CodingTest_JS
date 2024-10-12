function solution(num_list) {

    const sum = num_list.reduce((a,b)=>a+b,0)
    const multiply =num_list.reduce((a,b)=>a*b,1)
    if(multiply<sum*sum){
        answer = 1
    } else{
        answer =0
    }
   
    return answer;
}
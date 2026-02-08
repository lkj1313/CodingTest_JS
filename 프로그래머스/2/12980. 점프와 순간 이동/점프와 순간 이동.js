function solution(n){
    
    let battery = 0;
    while(n>0){
        if(n%2===0){
            n= n/2;
        } else{
            battery++;
            n-=1
        }
    }
    return battery;
}

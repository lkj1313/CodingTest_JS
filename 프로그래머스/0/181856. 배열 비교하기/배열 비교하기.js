function solution(arr1, arr2) {
    var answer = 0;
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    if(arr1Length>arr2Length){
        answer =1 
    } else if (arr1Length<arr2Length){
        answer = -1
    } else if(arr1Length===arr2Length){
        if(arr1.reduce((a,b)=>a+b,1)>arr2.reduce((a,b)=>a+b,1)){
            answer = 1
        } else if(arr1.reduce((a,b)=>a+b,1)<arr2.reduce((a,b)=>a+b,1)) {
            answer = -1
        } else{
            answer = 0
        }
    }
    return answer;
}
function solution(arr) {
   let result = []; //빈배열
    arr.forEach((num)=>{
        result = result.concat(Array(num).fill(num))
    })
    return result;
    
}

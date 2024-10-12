function solution(num_list) {
    const arrayLength = num_list.length-1
    if(num_list[arrayLength]>num_list[arrayLength-1]){
        num_list.push(num_list[arrayLength] - num_list[arrayLength-1])
    } else{
        num_list.push(num_list[arrayLength]*2)
    }
    
    return num_list;
}
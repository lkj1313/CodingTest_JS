function solution(num_list) {
    const orm = num_list.sort((a,b)=>a-b)
    const slicedOrm = orm.splice(0,5)
    

    return orm;
}
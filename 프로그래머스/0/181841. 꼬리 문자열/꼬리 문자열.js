function solution(str_list, ex) {
    
    const A = str_list.filter((a)=> !a.includes(ex))
    const answer = A.join('')
    return answer
}
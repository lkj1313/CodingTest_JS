function solution(s1, s2) {
    var answer = 0;
    const array = s1.filter((item)=> s2.includes(item))
    return array.length
}
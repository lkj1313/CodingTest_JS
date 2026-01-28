function solution(clothes) {
    const map = new Map();
    let answer = 1;
    for(const [cloth, type] of clothes){
        map.set(type, ( map.get(type)||0 ) +1)
    }
    for(const value of map.values()){
        answer = answer*(value+1)
    }
    return answer-1
}
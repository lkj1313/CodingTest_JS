function solution(participant, completion) {
    const map = new Map()
    //참가자 목록을 해시맵에 기록 (이름->개수)
    for (const name of participant){
        map.set(name, (map.get(name) || 0 )+1 )
    }
    // 해시맵에서 완주한사람들 밸류뺌
    for(const name of completion){
        map.set(name, map.get(name)-1)
    }
 
    for(const [name,count] of map){
        if(count>0){
            return name;
        }
    }
}
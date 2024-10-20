function solution(d, budget) {
    
    // 몇개의 부서에 지원했는지 리턴하라
    var answer = 0;
    const 오름차순 = d.sort((a,b)=> a-b);
    let 오름차순으로더한결과 = 0;
    let array = [];
    for(let i=0; i<d.length; i++){
        if(오름차순으로더한결과<budget && 오름차순[i]+오름차순으로더한결과<=budget){
            오름차순으로더한결과+= 오름차순[i];
            array.push(오름차순[i])
        }
    }
    return array.length;
}
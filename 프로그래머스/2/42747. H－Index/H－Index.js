function solution(citations) {
    citations.sort((a,b)=>b-a) /// [10,10,7,5]
    const map = new Map();
    const length = citations.length
    for(let i=0; i<length ;i++){
        map.set(i+1,citations[i]);
    }
    let hIndex = 0;
    for(const [score,rank] of map.entries()){  /// 1,10  2,10 3,7 4,5
        if(score<=rank){
            hIndex = score;
        }
    }
  return hIndex;   
}
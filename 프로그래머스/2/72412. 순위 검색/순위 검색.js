function solution(info, query) {
    const infoMap = {};
    function makeCombination(infos, score, start){
        const key = infos.join('')
        if(infoMap[key]){
            infoMap[key].push(score);
        } else{
            infoMap[key]= [score];
        }
        for(let i=start; i<infos.length; i++){
            const temp = [...infos]
            temp[i] = "-";
            makeCombination(temp, score, i + 1);
        }
    }
    
  for(const person of info){
        const parts = person.split(' ');
        const score = Number(parts.pop()); // 숫자로 변환 필수!
        makeCombination(parts, score, 0);
    }

   
    for (const key in infoMap) {
        infoMap[key].sort((a, b) => a - b);
    }
    const queryData = query.map((q)=>{
        const temp = q.replace(/ and /g, ' ').split(' ');
        const score = Number(temp.pop());
        const key = temp.join(''); 
        return {key, score};
    })
    const answerArr = [];
   for(let i = 0; i < queryData.length; i++){
        const { key, score } = queryData[i]; // 구조 분해 할당
        const scores = infoMap[key];

        if(!scores){
            answerArr.push(0);
            continue;
        } else {
            let left = 0;
            let right = scores.length;
            
            while(left < right){ // 이분 탐색 정석
                const mid = Math.floor((left + right) / 2);
                if(scores[mid] >= score){ // '이상'인 지점 찾기
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            // 전체 인원에서 커트라인 안 된 인원(left)을 뺌
            answerArr.push(scores.length - left);
        }
    }
    return answerArr;
}
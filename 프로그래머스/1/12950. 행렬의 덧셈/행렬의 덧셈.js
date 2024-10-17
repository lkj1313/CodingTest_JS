function solution(arr1, arr2) {
    var answer = [];
    for(i=0; i<arr1.length; i++){
        answer.push([]); // 각 행에 빈 배열을 먼저 추가
        for(j=0; j<arr1[i].length; j++){
            const sum = arr1[i][j] + arr2[i][j]
            answer[i].push(sum)
        }
    }
    return answer;
}
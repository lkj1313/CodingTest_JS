function solution(numbers) {
    const stack = []; // idx가 들어감
    const answer = new Array(numbers.length).fill(-1); // 숫자가들어감
   for(let i=0; i<numbers.length; i++){
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const index = stack.pop(); // 대기실에서 나옴
            answer[index] = numbers[i]; // 정답 기록
        }
        stack.push(i); // 나(현재 인덱스)도 대기실 입장
       
}
return answer;    
}

function solution(n, m) {
    // 각 숫자의 약수를 먼저 구하고 -> 동일한 값을 뽑아낸 뒤에 -> 그중에 가장 큰 값
    // 두 수의 곱을 최대공약수로 나눈 값 = 최소공배수
    let divisorsN = []; // n의 약수
    let divisorsM = []; // m의 약수
    
    // n의 약수 구하기
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorsN.push(i);
        }
    }

    // m의 약수 구하기
    for (let i = 1; i <= m; i++) {
        if (m % i === 0) {
            divisorsM.push(i);
        }
    }
    
    // 공약수 배열을 구하기
    const commonDivisors = divisorsN.filter(item => divisorsM.includes(item));
    const greatestCommonDivisor = Math.max(...commonDivisors);
    
    // 최소공배수 구하기
    const leastCommonMultiple = (n * m) / greatestCommonDivisor;
    
    // 결과 배열에 추가
    let answer = []; 
    answer.push(greatestCommonDivisor);
    answer.push(leastCommonMultiple);
    
    return answer;
}

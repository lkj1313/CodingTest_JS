function solution(s) {
    // 1. 소문자로 변환
    const lowerS = s.toLowerCase();
    
    // 2. 'p'의 개수 세기
    const pCount = [...lowerS].filter(char => char === 'p').length;
    
    // 3. 'y'의 개수 세기
    const yCount = [...lowerS].filter(char => char === 'y').length;
    
    // 4. 비교 결과 리턴 (같으면 true, 다르면 false)
    return pCount === yCount;
}
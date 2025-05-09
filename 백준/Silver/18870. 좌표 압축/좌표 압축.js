// 백준에서 입력을 받는 일반적인 방법
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 로컬 테스트용
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const originalCoords = input[1].split(' ').map(Number);

// 2. 유일한 좌표 정렬 리스트 생성
const sortedUniqueCoords = Array.from(new Set(originalCoords)).sort((a, b) => a - b);

// 이분 탐색 함수
function findIndexByBinarySearch(targetValue) {
    let low = 0;
    let high = sortedUniqueCoords.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (sortedUniqueCoords[mid] === targetValue) {
            return mid;
        } else if (sortedUniqueCoords[mid] < targetValue) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    // 이 문제의 경우, targetValue는 항상 sortedUniqueCoords에 존재해야 합니다.
    // 만약 여기까지 도달한다면 로직 오류 또는 입력값에 대한 가정 오류입니다.
    // 실제로는 이 return 문에 도달하지 않을 것으로 예상됩니다.
    return -1; 
}

// 3. 각 원본 좌표에 대해 이분 탐색 수행 및 결과 저장
const result = [];
for (let i = 0; i < N; i++) {
    const compressedValue = findIndexByBinarySearch(originalCoords[i]);
    result.push(compressedValue);
}

// 4. 결과 출력
console.log(result.join(' '));

/*
// 또는 map 함수를 사용하여 더 간결하게 표현 가능:
const finalResult = originalCoords.map(coord => findIndexByBinarySearch(coord));
console.log(finalResult.join(' '));
*/
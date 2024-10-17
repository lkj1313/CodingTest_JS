function solution(s) {
    var answer = true;

    // 문자열의 길이가 4 또는 6이 아닌 경우 바로 false 반환
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    // 문자열을 숫자로 변환하여 NaN이 있는지 검사
    const changeArray = s.split('').map(item => Number(item));
    const filtered = changeArray.filter(a => isNaN(a)); // NaN이 있는지 확인

    // NaN이 하나라도 있으면 answer는 false
    if (filtered.length > 0) {
        answer = false;
    }

    return answer;
}

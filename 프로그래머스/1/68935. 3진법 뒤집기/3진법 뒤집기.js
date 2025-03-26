function solution(n) {
    const three = n.toString(3);
    const three_reverse = three.split('').reverse().join('');

    const answer = parseInt(three_reverse, 3);
    return answer
}
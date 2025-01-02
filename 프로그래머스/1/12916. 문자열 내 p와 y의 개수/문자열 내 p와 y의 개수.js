function solution(s){
    var answer = true;
    let answer1 = s.toLowerCase().split('p').length-1
    let answer2 = s.toLowerCase().split('y').length-1
    answer1===answer2 ? answer = true : answer = false
    return answer;
}
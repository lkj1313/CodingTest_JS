function solution(my_string) {
    var answer = '';
    let 합 = my_string.split('');
    let 중복제거 = [...new Set(합)];
    let join = 중복제거.join('')
    return join;
}
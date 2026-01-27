function solution(a, b) {
    var answer = '';
    const date = new Date(2016,a-1,b);
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return day[date.getDay()];
}
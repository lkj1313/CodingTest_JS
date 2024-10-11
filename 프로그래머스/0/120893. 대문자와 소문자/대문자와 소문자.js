function solution(my_string) {
    var answer = '';
 
    return my_string.split('').map((a)=>a===a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}
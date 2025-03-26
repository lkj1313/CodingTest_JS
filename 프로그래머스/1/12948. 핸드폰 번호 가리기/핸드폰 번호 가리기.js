function solution(phone_number) {
    var answer = '';
    const last4 = phone_number.slice(-4);
    const start = '*'.repeat(phone_number.length-4);
    return start+last4
}
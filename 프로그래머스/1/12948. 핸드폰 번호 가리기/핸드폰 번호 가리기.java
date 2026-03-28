class Solution {
    public String solution(String phone_number) {
        String answer = "";
        int len = phone_number.length();
        String last4 = phone_number.substring(len-4);
        String front = "*".repeat(len-4);
        answer = front+last4;
        return answer;
    }
}
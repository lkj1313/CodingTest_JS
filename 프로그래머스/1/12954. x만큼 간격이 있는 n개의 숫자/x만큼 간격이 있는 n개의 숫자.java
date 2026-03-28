class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        long temp = 0;
        for(int i = 0; i<n; i++){
            answer[i] = temp + x;
            temp +=x;
        }
        
        return answer;
    }
}
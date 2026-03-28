class Solution {
    public String solution(String s) {
        String answer = "";
        if(s.length()%2==0){
            int quo = s.length()/2;
            answer+= s.substring(quo-1,quo+1);
        } else{
            int quo = s.length()/2;
            answer+= s.substring(quo,quo+1);
        }
        return answer;
    }
}
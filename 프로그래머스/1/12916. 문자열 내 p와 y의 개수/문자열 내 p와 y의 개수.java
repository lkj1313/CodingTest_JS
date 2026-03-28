import java.util.*;
class Solution {
    boolean solution(String s) {
        boolean answer = true;

        String LowerS = s.toLowerCase();
        String[] splitedLowerS = LowerS.split("");
        
        Map<String, Integer> map = new HashMap<>();
        
        for (String ch : splitedLowerS){
            map.put(ch, map.getOrDefault(ch, 0)+1);
        }
        if(map.get("p")==map.get("y")){
            return true;
        } else{
            return false;
        }
    
    }
}
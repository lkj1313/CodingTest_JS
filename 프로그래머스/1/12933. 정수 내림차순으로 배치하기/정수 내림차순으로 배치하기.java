import java.util.*;

class Solution {
    public long solution(long n) {
       String str = String.valueOf(n);
       String[] arr = str.split("");
       Arrays.sort(arr, Collections.reverseOrder());
       String result = String.join("", arr);

       return Long.parseLong(result); 
    }
}
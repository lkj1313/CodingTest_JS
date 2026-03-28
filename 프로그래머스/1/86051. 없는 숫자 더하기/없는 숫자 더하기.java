import java.util.*;
class Solution {
    public int solution(int[] numbers) {
        int sum = 0;
        for(int i =1; i<=9; i++){
            sum+=i;
        }
        int numbersSum = Arrays.stream(numbers).sum();
        return sum - numbersSum;
    }
}
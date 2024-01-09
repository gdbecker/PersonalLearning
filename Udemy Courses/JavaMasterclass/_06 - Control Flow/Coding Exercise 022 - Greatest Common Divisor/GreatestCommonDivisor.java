public class GreatestCommonDivisor {
    public static int getGreatestCommonDivisor(int first, int second) {
        if (first < 10 || second < 10) {
            return -1;
        }
        
        int min = Math.min(first, second);
        int result = 0;
        
        for (int x = min; x >= 2; x--) {
            if (first % x == 0 && second % x == 0) {
                result = x;
                break;
            }
        }
        
        return result;
    }
}
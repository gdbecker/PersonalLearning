public class PerfectNumber {
    public static boolean isPerfectNumber(int number) {
        if (number < 1) {
            return false;
        }
        
        int sum = 0;
        int x = 1;
        
        while (x < number) {
            if (number % x == 0) {
                sum += x;
            }
            x++;
        }
        
        return number == sum;
    }
}
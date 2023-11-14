public class EvenDigitSum {
    public static int getEvenDigitSum(int number) {
        if (number < 0) {
            return -1;
        }
        
        String num = String.valueOf(number);
        int sum = 0;
        
        for (int x = 0; x < num.length(); x++) {
            int a = (int)num.charAt(x) - '0';
            if (a % 2 == 0) {
                sum += a;
            }
        }
        
        return sum;
    }
}